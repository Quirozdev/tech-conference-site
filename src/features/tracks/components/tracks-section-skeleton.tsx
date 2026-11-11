import SectionTitle from "@/shared/components/section-title";
import Skeleton from "@/shared/components/skeleton";

export default function TracksSectionSkeleton() {
  return (
    <section className="flex flex-col gap-y-5 xl:gap-y-6">
      <SectionTitle title="// TRACKS" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-4">
        {Array.from({ length: 4 }).map((_, index) => {
          return <Skeleton key={index} className="h-29.5" />;
        })}
      </div>
    </section>
  );
}
