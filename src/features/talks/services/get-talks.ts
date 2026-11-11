import { db } from "@/prisma/db";

export async function getTalks(conferenceId: string, highlightedOnly: boolean) {
  "use cache";

  const query = db.orm.public.Talk.include("speaker").include("track");

  if (highlightedOnly) {
    return query.where({ conferenceId, highlighted: true }).all();
  }

  return query.where({ conferenceId }).all();
}
