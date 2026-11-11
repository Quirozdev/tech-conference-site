import ConferenceCard from "@/features/conference/components/conference-card";
import ConferenceHeroSectionEmpty from "@/features/conference/components/conference-hero-section-empty";
import { getConference } from "@/features/conference/services/get-conference";
import OpeningTalk from "@/features/talks/components/opening-talk";
import OpeningTalkEmpty from "@/features/talks/components/opening-talk-empty";
import { getOpeningTalk } from "@/features/talks/services/get-opening-talk";

export default async function ConferenceHeroSection() {
  const conference = await getConference();

  if (!conference) {
    return <ConferenceHeroSectionEmpty />;
  }

  const openingTalk = await getOpeningTalk(conference.id);

  return (
    <section className="flex flex-col gap-y-6 xl:flex-row xl:gap-x-8">
      <ConferenceCard conference={conference} />
      {openingTalk ? (
        <OpeningTalk talk={openingTalk} conference={conference} />
      ) : (
        <OpeningTalkEmpty />
      )}
    </section>
  );
}
