import { db } from "@/prisma/db";
import { all } from "@prisma/orm-postgres/orm-client";

export async function getTalks(
  conferenceId: string,
  highlightedOnly: boolean,
  days?: number[],
  trackIds?: string[],
  talkIds?: string[],
) {
  "use cache";

  return db.orm.public.Talk.include("speaker")
    .include("track")
    .where({ conferenceId })
    .where((talk) => (highlightedOnly ? talk.highlighted.eq(true) : all()))
    .where((talk) => (days && days?.length > 0 ? talk.day.in(days) : all()))
    .where((talk) =>
      trackIds && trackIds?.length > 0 ? talk.trackId.in(trackIds) : all(),
    )
    .where((talk) =>
      talkIds && talkIds?.length > 0 ? talk.id.in(talkIds) : all(),
    )
    .all();
}
