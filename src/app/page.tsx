import { Suspense } from "react";
import TracksSection from "@/features/tracks/components/tracks-section";
import TracksSectionSkeleton from "@/features/tracks/components/tracks-section-skeleton";
import SpeakersSection from "@/features/speakers/components/speakers-section";
import SpeakersSectionSkeleton from "@/features/speakers/components/speakers-section-skeleton";
import TalksSection from "@/features/talks/components/talks-section";
import TalksSectionSkeleton from "@/features/talks/components/talks-section-skeleton";
import ConferenceHeroSection from "@/features/conference/components/conference-hero-section";
import ConferenceHeroSectionSkeleton from "@/features/conference/components/conference-hero-section-skeleton";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-11.25">
      <Suspense fallback={<ConferenceHeroSectionSkeleton />}>
        <ConferenceHeroSection />
      </Suspense>

      <Suspense fallback={<TracksSectionSkeleton />}>
        <TracksSection />
      </Suspense>

      <Suspense fallback={<SpeakersSectionSkeleton featuredOnly={true} />}>
        <SpeakersSection featuredOnly={true} title="// FEATURED_SPEAKERS" />
      </Suspense>

      <Suspense fallback={<TalksSectionSkeleton highlightedOnly={true} />}>
        <TalksSection
          highlightedOnly={true}
          includeBookmark={false}
          title="// SCHEDULE_HIGHLIGHTS"
        />
      </Suspense>
    </div>
  );
}
