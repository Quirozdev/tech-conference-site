import ArrowRightIcon from "@/shared/icons/arrow-right-icon";
import { cn } from "@/shared/utils/cn";
import Link from "next/link";

type ButtonProps = {
  as: "button";
  label: string;
  variant: "primary" | "secondary";
} & React.ComponentPropsWithRef<"button">;

type LinkButtonProps = {
  as: "link";
  label: string;
  variant: "primary" | "secondary";
  href: string;
} & Omit<React.ComponentPropsWithRef<"a">, "href">;

type Props = ButtonProps | LinkButtonProps;

export default function Button({ label, variant, className, ...props }: Props) {
  const variantClasses: Record<typeof variant, string> = {
    primary:
      "bg-neutral-900 border-neutral-100 shadow-[2px_2px_0_0_var(--color-neutral-100)] text-neutral-100 hover:bg-green-200 hover:border-green-200 hover:shadow-[4px_4px_0_0_var(--color-neutral-600)] hover:text-neutral-900 focus:bg-neutral-900 focus:border-green-200 focus:shadow-[2px_2px_0_0_var(--color-green-200)] focus:border-dashed focus:text-neutral-100",
    secondary:
      "bg-cyan-100 border-neutral-900 shadow-[2px_2px_0_0_var(--color-neutral-900)] text-neutral-900 hover:bg-neutral-900 hover:border-neutral-600 hover:shadow-[2px_2px_0_0_var(--color-neutral-600)] hover:text-neutral-100 focus:bg-cyan-100 focus:border-neutral-600 focus:shadow-[2px_2px_0_0_var(--color-neutral-600)] focus:border-dashed focus:text-neutral-900",
  };

  const buttonClassName = cn(
    "text-preset-5 flex cursor-pointer items-center justify-center gap-x-3 border px-6 py-4 font-bold uppercase outline-none",
    variantClasses[variant],
    className,
  );

  if (props.as === "button") {
    return (
      <button type="button" className={buttonClassName} {...props}>
        <span>{label}</span>
        {variant === "secondary" && <ArrowRightIcon />}
      </button>
    );
  }

  // destructure as to avoid being passed to link component
  const { as, href, ...remainingProps } = props;

  return (
    <Link href={href} className={buttonClassName} {...remainingProps}>
      <span>{label}</span>
      {variant === "secondary" && <ArrowRightIcon />}
    </Link>
  );
}
