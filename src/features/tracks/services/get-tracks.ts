import { db } from "@/prisma/db";

export async function getTracks() {
  "use cache";

  return db.orm.public.Track.where((track) => track.name.neq("Keynote")).all();
}
