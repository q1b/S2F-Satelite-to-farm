import type { LayoutServerLoad } from "./$types";


export const load: LayoutServerLoad = async (event) => {
    return {
        isLoggedIn: event.locals.user !== null,
    }
};