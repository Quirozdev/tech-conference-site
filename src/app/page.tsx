import Schedule from "@/features/schedule/components/schedule";
import SectionTitle from "@/shared/components/section-title";
import Speaker from "@/features/speakers/components/speaker";
import Track from "@/features/tracks/components/track";
import { data } from "@/shared/data/data";
import Image from "next/image";
import Button from "@/shared/components/button";
import { getLabelBetweenTwoIsoStringDates } from "@/shared/utils/dates";
import SpeakerWrapper from "@/features/speakers/components/speaker-wrapper";

export default function HomePage() {
  const conferenceDatesLabel = getLabelBetweenTwoIsoStringDates(
    data.conference.startDate,
    data.conference.endDate,
  );

  const featuredSpeakersWithTheirTalkAndTrack = data.speakers
    .filter((speaker) => speaker.featured)
    .map((speaker) => {
      const talk = data.talks.find((talk) => talk.speakerId === speaker.id)!;
      const track = data.tracks.find((track) => track.id === talk.trackId)!;
      return { ...speaker, talk: { ...talk, track } };
    });

  const tracksWithoutKeynoteOne = data.tracks.filter(
    (track) => track.name !== "Keynote",
  );

  const latestTalks = data.talks.slice(-5, -1).map((talk) => {
    const speaker = data.speakers.find(
      (speaker) => speaker.id === talk.speakerId,
    )!;
    const track = data.tracks.find((track) => track.id === talk.trackId)!;
    return { ...talk, speaker, track };
  });

  return (
    <div className="flex flex-col gap-y-11.25">
      <section className="flex flex-col gap-y-6 xl:flex-row xl:gap-x-8">
        <article className="relative flex min-h-55 flex-col justify-between bg-neutral-100 p-4 md:max-h-[400px] md:min-h-90 md:px-6 md:py-5 xl:flex-1 xl:px-8">
          <h1 className="text-preset-1 font-chakra-petch text-neutral-900">
            {data.conference.tagline}
          </h1>
          <Image
            src="/images/bg-horizon-text.svg"
            width={554}
            height={128}
            alt=""
            className="absolute top-1/2 left-1/2 h-16 w-69.25 -translate-x-1/2 -translate-y-1/2 text-center md:h-32 md:w-138.5"
          />
          <div className="flex items-center justify-between border-t-2 border-neutral-900 pt-4">
            <p className="text-preset-6 text-neutral-900 uppercase">
              {conferenceDatesLabel}
            </p>
            <p className="text-preset-6 text-neutral-900 uppercase">
              {data.conference.location.venue},{" "}
              {data.conference.location.cityAbbreviation}
            </p>
          </div>
        </article>
        <article className="overflow-hidden bg-cyan-100 px-4 py-5 md:flex md:max-h-[400px] md:gap-y-5 md:px-6 md:py-6 xl:min-w-137">
          <div className="flex flex-col gap-y-8 md:flex-1 md:justify-between">
            <div className="flex flex-col gap-y-4">
              <p className="text-preset-6 text-neutral-900">
                {"// FEATURED KEYNOTE"}
              </p>
              <div className="flex flex-col gap-y-2">
                <p className="text-preset-2 font-chakra-petch text-neutral-900">
                  elena vasquez
                </p>
                <p className="text-preset-6 flex flex-col font-medium text-neutral-600 uppercase">
                  <span>PRINCIPAL FRONTEND ENGINEER</span>
                  <span>@BYTECRAFT</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <p className="text-preset-5 font-bold text-neutral-900 uppercase">
                  THE NEXT FRONTIER OF WEB DEVELOPMENT
                </p>
                <p className="text-preset-6 font-medium text-neutral-600 uppercase">
                  NOV 15 / 9:00 / ROOM A
                </p>
              </div>
              <Button
                as="link"
                href={`/schedule?talk=${data.talks[0].id}`}
                label="View Talk"
                variant="secondary"
                className="md:w-fit"
              />
            </div>
          </div>
          <div className="relative md:flex-1">
            <Image
              src="/images/avatar-elena-vasquez.webp"
              width={636}
              height={500}
              alt="Elena Vasquez's profile picture"
              className="absolute top-6 -left-12 z-10 hidden h-full min-w-120 md:block xl:-left-16"
            />
            <div className="absolute -top-14 -right-24 hidden h-46 w-46 rounded-full border-2 border-black/8 md:block xl:hidden"></div>
            <div className="absolute top-8 -right-8 hidden h-31 w-31 rounded-full border-2 border-black/8 md:block xl:hidden"></div>
          </div>
        </article>
      </section>
      <section className="flex flex-col gap-y-5 xl:gap-y-6">
        <SectionTitle title="// TRACKS" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-4">
          {tracksWithoutKeynoteOne.map((track) => {
            return <Track key={track.id} {...track} />;
          })}
        </div>
      </section>
      <section className="flex flex-col gap-y-6">
        <SectionTitle title="// FEATURED_SPEAKERS" />
        <SpeakerWrapper>
          {featuredSpeakersWithTheirTalkAndTrack.map((speaker) => {
            return <Speaker key={speaker.id} {...speaker} />;
          })}
        </SpeakerWrapper>
        <Button
          as="link"
          href="/speakers"
          variant="primary"
          label="View all speakers"
          className="mx-auto w-fit"
        />
      </section>
      <section className="flex flex-col gap-y-6">
        <SectionTitle title="// SCHEDULE_HIGHLIGHTS" />
        <div className="flex flex-col gap-y-4">
          {latestTalks.map((talk) => {
            return (
              <Schedule includeDetailsSection={true} key={talk.id} {...talk} />
            );
          })}
        </div>
        <Button
          as="link"
          href="/schedule"
          variant="primary"
          label="View full schedule"
          className="mx-auto mt-6 w-fit"
        />
      </section>
    </div>
  );
}
