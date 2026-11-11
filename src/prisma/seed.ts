import { db, pool } from "@/prisma/db";
import { seedData } from "@/prisma/seed-data";

async function seed() {
  console.log("-------SEED-------");
  try {
    const location = await seedLocation();
    const conference = await seedConference(location.id);
    await seedTracks(conference.id);
    await seedSpeakers();
    await seedTalks(conference.id);
  } finally {
    await db.close();
    await pool.end();
    console.log("-------END OF SEED-------");
  }
}

async function seedLocation() {
  const alreadyInsertedLocation = await db.orm.public.Location.where({
    id: seedData.conference.location.id,
  }).first();

  if (alreadyInsertedLocation) {
    console.log(`1 Location was already seeded. 0 new Locations added`);
    return alreadyInsertedLocation;
  }

  const location = await db.orm.public.Location.create({
    ...seedData.conference.location,
  });
  console.log(`0 Locations were already seeded. 1 new Locations added`);
  return location;
}

async function seedConference(locationId: string) {
  const alreadyInsertedConference = await db.orm.public.Conference.where({
    id: seedData.conference.id,
  }).first();

  if (alreadyInsertedConference) {
    console.log(`1 Conference was already seeded. 0 new Conferences added`);
    return alreadyInsertedConference;
  }

  const { location, ...conferenceWithoutLocation } = seedData.conference;

  const conference = await db.orm.public.Conference.create({
    ...conferenceWithoutLocation,
    locationId,
  });

  console.log(`0 Conferences were already seeded. 1 new Conference added`);

  return conference;
}

async function seedTracks(conferenceId: string) {
  const alreadyInsertedTracks = await db.orm.public.Track.all();

  const nonInsertedTracks = seedData.tracks.filter(
    (track) =>
      !alreadyInsertedTracks.some(
        (alreadyInsertedTrack) => alreadyInsertedTrack.id === track.id,
      ),
  );

  const tracks = await db.orm.public.Track.createAll(
    nonInsertedTracks.map((track) => {
      return { ...track, conferenceId };
    }),
  );

  console.log(
    `${seedData.tracks.length - nonInsertedTracks.length} Tracks were already seeded. ${nonInsertedTracks.length} new Tracks added`,
  );

  return tracks;
}

async function seedSpeakers() {
  const alreadyInsertedSpeakers = await db.orm.public.Speaker.all();

  const nonInsertedSpeakers = seedData.speakers.filter(
    (speaker) =>
      !alreadyInsertedSpeakers.some(
        (alreadyInsertedSpeaker) => alreadyInsertedSpeaker.id === speaker.id,
      ),
  );

  const speakers = await db.orm.public.Speaker.createAll(nonInsertedSpeakers);

  console.log(
    `${seedData.speakers.length - nonInsertedSpeakers.length} Speakers were already seeded. ${nonInsertedSpeakers.length} new Speakers added`,
  );

  return speakers;
}

async function seedTalks(conferenceId: string) {
  const alreadyInsertedTalks = await db.orm.public.Talk.all();

  const nonInsertedTalks = seedData.talks.filter(
    (talk) =>
      !alreadyInsertedTalks.some(
        (alreadyInsertedTalk) => alreadyInsertedTalk.id === talk.id,
      ),
  );

  const talks = await db.orm.public.Talk.createAll(
    nonInsertedTalks.map((talk) => {
      return { ...talk, conferenceId };
    }),
  );

  console.log(
    `${seedData.talks.length - nonInsertedTalks.length} Talks were already seeded. ${nonInsertedTalks.length} new Talks added`,
  );

  return talks;
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
