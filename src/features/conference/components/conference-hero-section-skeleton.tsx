import Skeleton from "@/shared/components/skeleton";

export default function ConferenceHeroSectionSkeleton() {
  return (
    <section className="flex flex-col gap-y-6 xl:flex-row xl:gap-x-8">
      <Skeleton className="min-h-55 md:min-h-90 xl:min-h-91 xl:flex-1" />
      <Skeleton className="min-h-86 md:min-h-89 xl:min-h-91 xl:min-w-137" />
    </section>
  );
}
