import { cn } from "@/shared/utils/cn";

type Props = React.ComponentPropsWithoutRef<"div">;

export default function Skeleton({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "shimmer shimmer-bg shimmer-color-neutral-600 bg-neutral-500",
        className,
      )}
      {...props}
    ></div>
  );
}
