import { cn } from "@/shared/utils/cn";

type Props = React.ComponentPropsWithRef<"button">;

export default function ClearControlButton({ children, ...props }: Props) {
  return (
    <button
      type="button"
      className={cn(
        "text-preset-6 cursor-pointer rounded-full border border-red-300 px-4 py-2 font-medium text-red-300 uppercase outline-none hover:bg-neutral-900 hover:shadow-[2px_2px_0_0_var(--color-red-300)] focus:border-dashed focus:bg-neutral-900 focus:shadow-[2px_2px_0_0_var(--color-red-300)]",
      )}
      {...props}
    >
      {children}
    </button>
  );
}
