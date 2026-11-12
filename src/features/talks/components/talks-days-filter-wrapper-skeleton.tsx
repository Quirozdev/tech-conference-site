import Skeleton from "@/shared/components/skeleton";

interface Props {
  skeletonsCount?: number;
}

export default async function TalksDaysFilterWrapperSkeleton({
  skeletonsCount = 3,
}: Props) {
  return (
    <div role="tablist" className="flex flex-wrap items-center gap-5">
      {Array.from({ length: skeletonsCount }).map((_, index) => {
        return <Skeleton key={index} className="min-h-9.75 min-w-21" />;
      })}
    </div>
  );
}
