import SectionTitle from "@/shared/components/section-title";

export default function TracksSectionSkeleton() {
  return (
    <section className="flex flex-col gap-y-5 xl:gap-y-6">
      <SectionTitle title="// TRACKS" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-4">
        <div className="shimmer shimmer-bg shimmer-color-neutral-600 h-29.5 bg-neutral-500"></div>
        <div className="shimmer shimmer-bg shimmer-color-neutral-600 h-29.5 bg-neutral-500"></div>
        <div className="shimmer shimmer-bg shimmer-color-neutral-600 h-29.5 bg-neutral-500"></div>
        <div className="shimmer shimmer-bg shimmer-color-neutral-600 h-29.5 bg-neutral-500"></div>
      </div>
    </section>
  );
}
