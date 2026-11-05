import clsx from "clsx";
import { ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "preset-1",
        "preset-2",
        "preset-3",
        "preset-4",
        "preset-5",
        "preset-6",
        "preset-7",
        "preset-8",
        "preset-9",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
