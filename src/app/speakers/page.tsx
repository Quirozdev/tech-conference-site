import PageTitle from "@/shared/components/page-title";
import Separator from "@/shared/components/separator";
import { Metadata } from "next";
import { Suspense } from "react";
import SpeakersSectionSkeleton from "@/features/speakers/components/speakers-section-skeleton";
import SpeakersSection from "@/features/speakers/components/speakers-section";

export const metadata: Metadata = {
  title: "Speakers",
};

export default function SpeakersPage() {
  return (
    <div className="flex flex-col gap-y-6">
      <PageTitle title="// speakers" />
      <Separator />

      <Suspense
        fallback={
          <SpeakersSectionSkeleton featuredOnly={false} skeletonsCount={20} />
        }
      >
        <SpeakersSection featuredOnly={false} />
      </Suspense>
    </div>
  );
}
