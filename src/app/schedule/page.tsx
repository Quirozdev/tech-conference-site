import Schedule from "@/features/schedule/components/schedule";
import PageTitle from "@/shared/components/page-title";
import Separator from "@/shared/components/separator";
import { data } from "@/shared/data/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
};

export default function SchedulePage() {
  const talks = data.talks.map((talk) => {
    const speaker = data.speakers.find(
      (speaker) => speaker.id === talk.speakerId,
    )!;
    const track = data.tracks.find((track) => track.id === talk.trackId)!;
    return { ...talk, speaker, track };
  });

  return (
    <div className="flex flex-col gap-y-6">
      <PageTitle title="// schedule" />
      <Separator />
      <div className="flex flex-col gap-y-4">
        {talks.map((talk) => {
          return (
            <Schedule includeDetailsSection={true} key={talk.id} {...talk} />
          );
        })}
      </div>
    </div>
  );
}
