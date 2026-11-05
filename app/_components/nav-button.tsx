"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../_lib/cn";

interface Props {
  href: string;
  label: string;
  onNavigation?: () => void;
}

export default function NavButton({ href, label, onNavigation }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onNavigate={onNavigation}
      className={cn(
        "flex items-center justify-center border border-neutral-100 px-6 py-2.5 text-neutral-100 focus:border-dashed focus:border-green-200 focus:bg-neutral-800 focus:shadow-[2px_2px_0_0_var(--color-green-200)]",
        {
          "border-green-200 bg-neutral-800 text-green-200 shadow-[2px_2px_0_0_var(--color-green-200)]":
            isActive,
        },
        {
          "hover:bg-neutral-900 hover:shadow-[2px_2px_0_0_var(--color-neutral-100)]":
            !isActive,
        },
      )}
    >
      <span className="text-preset-6 font-medium uppercase">{label}</span>
    </Link>
  );
}
