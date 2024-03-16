import type { Actions, PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { Argon2id } from "oslo/password";
import { zod } from "sveltekit-superforms/adapters";
import { error, fail, redirect } from "@sveltejs/kit";
import { lucia } from "$lib/server/auth";
import { db } from "@/server/db";
import { generateId } from "lucia";
import { userTable } from "@/server/db/schema/user.js";
import { eq } from "drizzle-orm";

export const load: PageServerLoad = async () => {
	return {
		loginForm: await superValidate(zod(formSchema)),
		signupForm: await superValidate(zod(formSchema)),
	};
};

export const actions: Actions = {
	signup: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get("username");
		const password = formData.get("password");
		if (
			typeof username !== "string" ||
			username.length < 3 ||
			username.length > 31 ||
			!/^[a-z0-9_-]+$/.test(username)
		) {
			return error(400, {
				message: "Invalid username"
			});
		}
		if (typeof password !== "string" || password.length < 6 || password.length > 255) {
			return error(400, {
				message: "Invalid password"
			});
		}

		const hashedPassword = await new Argon2id().hash(password);
		const userId = generateId(15);

		try {
			await db.insert(userTable).values({
				id: userId,
				username,
				password: hashedPassword,
			});

			const session = await lucia.createSession(userId, {});
			const sessionCookie = lucia.createSessionCookie(session.id);

			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: ".",
				...sessionCookie.attributes
			});
		} catch (e) {
			console.log("ERROR", e)
			if (e?.code === "SQLITE_CONSTRAINT_UNIQUE") {
				return error(400, {
					message: "Username already used"
				});
			}
			return error(500, {
				message: "An unknown error occurred"
			});
		}
		return redirect(302, "/");
	},
	login: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get("username");
		const password = formData.get("password");

		if (
			typeof username !== "string" ||
			username.length < 3 ||
			username.length > 31 ||
			!/^[a-z0-9_-]+$/.test(username)
		) {
			return error(400, {
				message: "Invalid username"
			});
		}
		if (typeof password !== "string" || password.length < 6 || password.length > 255) {
			return error(400, {
				message: "Invalid password"
			});
		}

		const existingUser = await db.query.userTable.findFirst({
			where: eq(userTable.username, username)
		})

		if (!existingUser) {
			return error(400, {
				message: "Incorrect username or password"
			});
		}

		const validPassword = await new Argon2id().verify(existingUser.password as string, password);
		if (!validPassword) {
			return error(400, {
				message: "Incorrect username or password"
			});
		}

		const session = await lucia.createSession(existingUser.id, {})
		const sessionCookie = lucia.createSessionCookie(session.id)
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		})

		return redirect(302, "/");
	},
	logout: async (event) => {
		if (!event.locals.session) {
			return redirect(302, '/');
		}
		await lucia.invalidateSession(event.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		return redirect(302, '/auth');
	}
};