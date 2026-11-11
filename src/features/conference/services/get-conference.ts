import { db } from "@/prisma/db";

export async function getConference() {
  "use cache";

  return db.orm.public.Conference.include("location")
    .orderBy((c) => c.startDate.desc())
    .first();
}
