import { db } from "@/server/db";
import type { PageServerLoad } from "./$types";
import { eq } from "drizzle-orm";
import { cropFieldTable} from "@/server/db/schema";

export const load: PageServerLoad = async (event) => {
    if(!event.locals.user?.id) return {cropFields: []}

    const cropFields = await db.query.cropFieldTable.findMany({
        where: eq(cropFieldTable.userId, event.locals.user.id)
    })

    return {
        cropFields: cropFields
    }
};