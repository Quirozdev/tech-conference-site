import { db } from "@/prisma/db";

export async function getTalksDays() {
  "use cache";

  return db.orm.public.Talk.select("day")
    .orderBy((t) => t.day.asc())
    .distinct("day")
    .all();
}
