import { cn } from "@/app/_lib/cn";

type Props = React.ComponentPropsWithRef<"div">;

export default function Separator({ className, ...props }: Props) {
  return (
    <div
      className={cn("h-px w-full bg-neutral-600", className)}
      {...props}
    ></div>
  );
}
