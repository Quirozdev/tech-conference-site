import { db } from "@/prisma/db";

export async function getSpeakers(featuredOnly: boolean) {
  "use cache";

  const query = db.orm.public.Speaker.include("talk", (talk) =>
    talk.include("track"),
  );

  if (featuredOnly) {
    return query.where({ featured: true }).all();
  }

  return query.all();
}
