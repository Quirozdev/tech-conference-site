import { cn } from "@/app/_lib/cn";

type Props = React.ComponentPropsWithRef<"button">;

export default function SmallButton({ children, className, ...props }: Props) {
  return (
    <button
      type="button"
      className={cn(
        "flex size-10 cursor-pointer items-center justify-center border border-neutral-100 p-2.5 outline-none hover:bg-neutral-900 hover:shadow-[2px_2px_0_0_var(--color-neutral-100)] focus:border-dashed focus:border-green-200 focus:bg-neutral-800 focus:shadow-[2px_2px_0_0_var(--color-green-200)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
