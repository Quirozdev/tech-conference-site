import ClearControlButton from "@/shared/components/control-buttons/clear-control-button";
import TalksSectionSkeleton from "@/features/talks/components/talks-section-skeleton";
import PageTitle from "@/shared/components/page-title";
import Separator from "@/shared/components/separator";
import { Metadata } from "next";
import { Suspense } from "react";
import TracksFilterWrapper from "@/features/tracks/components/tracks-filter-wrapper";
import TracksFilterSkeleton from "@/features/tracks/components/tracks-filter-wrapper-skeleton";
import TalksDaysFilterWrapper from "@/features/talks/components/talks-days-filter-wrapper";
import TalksDaysFilterWrapperSkeleton from "@/features/talks/components/talks-days-filter-wrapper-skeleton";
import ScheduleTalksSection from "@/features/talks/components/schedule-talks-section";
import MyScheduleTalksFilter from "@/features/talks/components/my-schedule-talks-filter";

export const metadata: Metadata = {
  title: "Schedule",
};

interface Props {
  searchParams: Promise<{
    day?: string | string[];
    trackId?: string | string[];
    talkId?: string | string[];
  }>;
}

export default function SchedulePage({ searchParams }: Props) {
  return (
    <div className="flex flex-col gap-y-6">
      <PageTitle title="// schedule" />
      <Separator />
      <div className="flex flex-wrap items-center gap-5">
        <Suspense fallback={<TalksDaysFilterWrapperSkeleton />}>
          <TalksDaysFilterWrapper />
        </Suspense>

        <div className="h-full min-h-6 w-px bg-neutral-500"></div>

        <Suspense fallback={<TracksFilterSkeleton />}>
          <TracksFilterWrapper />
        </Suspense>

        <Suspense>
          <MyScheduleTalksFilter />
        </Suspense>

        <ClearControlButton>Clear</ClearControlButton>
      </div>

      <Suspense
        fallback={
          <TalksSectionSkeleton highlightedOnly={false} skeletonsCount={20} />
        }
      >
        <ScheduleTalksSection searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
