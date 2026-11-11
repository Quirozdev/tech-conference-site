import SpeakerWrapper from "@/features/speakers/components/speaker-wrapper";
import Button from "@/shared/components/button";
import SectionTitle from "@/shared/components/section-title";
import Skeleton from "@/shared/components/skeleton";

interface Props {
  featuredOnly: boolean;
  skeletonsCount?: number;
}

export default function SpeakersSectionSkeleton({
  featuredOnly,
  skeletonsCount = 8,
}: Props) {
  return (
    <section className="flex flex-col gap-y-6">
      <SectionTitle title="// FEATURED_SPEAKERS" />
      <SpeakerWrapper>
        {Array.from({ length: skeletonsCount }, (_, index) => {
          return <Skeleton key={index} className="h-103 xl:h-108.25" />;
        })}
      </SpeakerWrapper>
      {featuredOnly && (
        <Button
          as="link"
          href="/speakers"
          variant="primary"
          label="View all speakers"
          className="mx-auto w-fit"
        />
      )}
    </section>
  );
}
