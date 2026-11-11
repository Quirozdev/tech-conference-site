import Skeleton from "@/shared/components/skeleton";

interface Props {
  title: string;
  skeletonsCount?: number;
}

export default function FooterLinksSkeleton({
  title,
  skeletonsCount = 4,
}: Props) {
  return (
    <div className="flex flex-col gap-y-4">
      <h3 className="text-preset-6 font-medium whitespace-nowrap text-green-200 uppercase">
        {title}
      </h3>
      <div className="flex flex-col gap-y-3">
        {Array.from({ length: skeletonsCount }).map((_, index) => {
          return (
            <Skeleton key={index} className="rounded-6 h-5.25 w-fit min-w-30" />
          );
        })}
      </div>
    </div>
  );
}
