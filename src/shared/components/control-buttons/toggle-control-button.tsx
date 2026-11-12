import { cn } from "@/shared/utils/cn";

interface Props extends React.ComponentPropsWithRef<"button"> {
  isSelected: boolean;
}

export default function ToggleControlButton({
  isSelected,
  children,
  ...props
}: Props) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      className={cn(
        "text-preset-6 cursor-pointer rounded-full border border-dashed border-green-200 px-4 py-2 font-medium text-green-200 uppercase outline-none focus:shadow-[2px_2px_0_0_var(--color-green-200)]",
        { "border-green-200 bg-green-200 text-neutral-900": isSelected },
        {
          "hover:border-green-200 hover:bg-neutral-900 hover:text-green-200 hover:shadow-[2px_2px_0_0_var(--color-green-200)] focus:border-solid focus:bg-neutral-900 focus:text-green-200":
            !isSelected,
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}
