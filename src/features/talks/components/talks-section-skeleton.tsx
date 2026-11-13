import Button from "@/shared/components/button";
import SectionTitle from "@/shared/components/section-title";
import Skeleton from "@/shared/components/skeleton";

interface Props {
  highlightedOnly: boolean;
  skeletonsCount?: number;
}

export default function TalksSectionSkeleton({
  highlightedOnly,
  skeletonsCount = 4,
}: Props) {
  return (
    <section className="flex flex-col gap-y-6">
      {highlightedOnly && <SectionTitle title="// SCHEDULE_HIGHLIGHTS" />}
      <div className="flex flex-col gap-y-4">
        {Array.from({ length: skeletonsCount }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="h-64 sm:h-57.5 md:h-43.5 xl:h-38.5"
            />
          );
        })}
      </div>
      {highlightedOnly && (
        <Button
          as="link"
          href="/schedule"
          variant="primary"
          label="View full schedule"
          className="mx-auto mt-6 w-fit"
        />
      )}
    </section>
  );
}
