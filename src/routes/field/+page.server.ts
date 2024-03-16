import { db } from "@/server/db";
import type { Actions } from "./$types";
import { cropFieldTable, userTable } from "@/server/db/schema";

export const actions: Actions = {
    create: async (e) => {
        const formData = await e.request.formData();
        const cropname = formData.get('crop-name');
        const lat = formData.get('latitude')
        const lag = formData.get('longitude')
        if (lag && lat && cropname && e.locals.user) {
            await db.insert(cropFieldTable).values({
                lag: lag.toString(),
                lat: lat.toString(),
                currentCrop: cropname.toString(),
                userId: e.locals.user.id
            })
        }
    }
};