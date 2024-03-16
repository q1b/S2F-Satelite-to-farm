import { db } from "@/server/db";
import type { PageServerLoad } from "./$types";
import { cropFieldTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const load: PageServerLoad = async (event) => {
    
    const cropField = await db.query.cropFieldTable.findFirst({
        where: eq(cropFieldTable.id,event.params.field_id)
    })
    
    return {
        cropField
    }
};