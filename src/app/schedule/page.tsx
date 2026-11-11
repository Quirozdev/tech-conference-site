import ClearControlButton from "@/app/schedule/components/control-buttons/clear-control-button";
import FilterControlButton from "@/app/schedule/components/control-buttons/filter-control-button";
import TabControlButton from "@/app/schedule/components/control-buttons/tab-control-button";
import ToggleControlButton from "@/app/schedule/components/control-buttons/toggle-control-button";
import Schedule from "@/features/talks/components/schedule";
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

  const tracksWithoutKeynoteOne = data.tracks.filter(
    (track) => track.name !== "Keynote",
  );

  return (
    <div className="flex flex-col gap-y-6">
      <PageTitle title="// schedule" />
      <Separator />
      <div className="flex flex-wrap items-center gap-5">
        <div role="tablist" className="flex flex-wrap items-center gap-5">
          <TabControlButton isSelected={true}>Day 01</TabControlButton>
          <TabControlButton isSelected={false}>Day 02</TabControlButton>
          <TabControlButton isSelected={false}>Day 03</TabControlButton>
        </div>
        <div className="h-full min-h-6 w-px bg-neutral-500"></div>
        {tracksWithoutKeynoteOne.map((track, index) => {
          return (
            <FilterControlButton key={track.id} isSelected={index === 0}>
              {track.name}
            </FilterControlButton>
          );
        })}
        <ToggleControlButton isSelected={false}>
          My Schedule
        </ToggleControlButton>
        <ClearControlButton>Clear</ClearControlButton>
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
