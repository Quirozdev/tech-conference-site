import { cn } from "@/app/_lib/cn";
import Link from "next/link";

interface Props {
  title: string;
  upperText: string;
  lowerText: string;
  trackTitleClassName?: string;
}

export default function Track({
  title,
  upperText,
  lowerText,
  trackTitleClassName,
}: Props) {
  return (
    <Link
      href="#"
      className="flex flex-col gap-y-1.5 border border-neutral-100 bg-neutral-900 px-5 py-4 shadow-[2px_2px_0_0_var(--color-neutral-100)] hover:border-green-200 hover:shadow-[2px_2px_0_0_var(--color-green-200)] focus:border-dashed focus:border-green-200 focus:shadow-[2px_2px_0_0_var(--color-green-200)]"
    >
      <p
        className={cn(
          "text-preset-3 font-chakra-petch text-neutral-100",
          trackTitleClassName,
        )}
      >
        {title}
      </p>
      <p className="text-preset-6 flex flex-col font-medium text-neutral-200 uppercase">
        <span>{upperText}</span>
        <span>{lowerText}</span>
      </p>
    </Link>
  );
}
