import ClearControlButton from "@/shared/components/control-buttons/clear-control-button";
import TabControlButton from "@/shared/components/control-buttons/tab-control-button";
import ToggleControlButton from "@/shared/components/control-buttons/toggle-control-button";
import TalksSection from "@/features/talks/components/talks-section";
import TalksSectionSkeleton from "@/features/talks/components/talks-section-skeleton";
import PageTitle from "@/shared/components/page-title";
import Separator from "@/shared/components/separator";
import { Metadata } from "next";
import { Suspense } from "react";
import TracksFilterWrapper from "@/features/tracks/components/tracks-filter-wrapper";
import TracksFilterSkeleton from "@/features/tracks/components/tracks-filter-wrapper-skeleton";

export const metadata: Metadata = {
  title: "Schedule",
};

export default function SchedulePage() {
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

        <Suspense fallback={<TracksFilterSkeleton />}>
          <TracksFilterWrapper />
        </Suspense>

        <ToggleControlButton isSelected={false}>
          My Schedule
        </ToggleControlButton>
        <ClearControlButton>Clear</ClearControlButton>
      </div>

      <Suspense fallback={<TalksSectionSkeleton highlightedOnly={true} />}>
        <TalksSection highlightedOnly={false} includeBookmark={true} />
      </Suspense>
    </div>
  );
}
