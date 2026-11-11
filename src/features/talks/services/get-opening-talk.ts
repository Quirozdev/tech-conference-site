import { db } from "@/prisma/db";

export async function getOpeningTalk(conferenceId: string) {
  "use cache";

  return db.orm.public.Talk.orderBy([
    (t) => t.day.asc(),
    (t) => t.startTime.asc(),
  ])
    .where({ conferenceId })
    .include("speaker")
    .include("track")
    .first();
}
