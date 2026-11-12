import Skeleton from "@/shared/components/skeleton";

interface Props {
  skeletonsCount?: number;
}

export default function TracksFilterSkeleton({ skeletonsCount = 4 }: Props) {
  return (
    <>
      {Array.from({ length: skeletonsCount }).map((_, index) => {
        return (
          <Skeleton key={index} className="min-h-9.75 min-w-30 rounded-full" />
        );
      })}
    </>
  );
}
