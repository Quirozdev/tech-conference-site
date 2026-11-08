import TabControlButton from "@/app/schedule/components/control-buttons/tab-control-button";
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
      <div className="flex items-center gap-5">
        <div role="tablist" className="flex items-center gap-5">
          <TabControlButton isSelected={true}>Day 01</TabControlButton>
          <TabControlButton isSelected={false}>Day 02</TabControlButton>
          <TabControlButton isSelected={false}>Day 03</TabControlButton>
        </div>
        <div className="h-full min-h-6 w-px bg-neutral-500"></div>
      </div>
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
