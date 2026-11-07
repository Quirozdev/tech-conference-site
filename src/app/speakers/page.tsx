import SpeakerWrapper from "@/features/speakers/components/speaker-wrapper";
import Speaker from "@/features/speakers/components/speaker";
import PageTitle from "@/shared/components/page-title";
import Separator from "@/shared/components/separator";
import { data } from "@/shared/data/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers",
};

export default function SpeakersPage() {
  const speakersWithTheirTalkAndTrack = data.speakers.map((speaker) => {
    const talk = data.talks.find((talk) => talk.speakerId === speaker.id)!;
    const track = data.tracks.find((track) => track.id === talk.trackId)!;
    return { ...speaker, talk: { ...talk, track } };
  });

  return (
    <div className="flex flex-col gap-y-6">
      <PageTitle title="// speakers" />
      <Separator />
      <SpeakerWrapper>
        {speakersWithTheirTalkAndTrack.map((speaker) => {
          return <Speaker key={speaker.id} {...speaker} />;
        })}
      </SpeakerWrapper>
    </div>
  );
}
