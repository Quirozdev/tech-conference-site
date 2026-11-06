import { cn } from "@/app/_lib/cn";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  description: string;
  color: string;
}

export default function Track({ name, description, color }: Props) {
  function getSplittedDescription() {
    const splittedDescription = description.split(" ");
    const wordsLength = splittedDescription.length;
    const half = Math.ceil(wordsLength / 2);
    return [
      splittedDescription.slice(0, half).join(" "),
      splittedDescription.slice(half, wordsLength).join(" "),
    ];
  }

  const [descriptionFirstRow, descriptionSecondRow] = getSplittedDescription();

  return (
    <Link
      href="#"
      className="flex flex-col gap-y-1.5 border border-neutral-100 bg-neutral-900 px-5 py-4 shadow-[2px_2px_0_0_var(--color-neutral-100)] outline-none hover:border-green-200 hover:shadow-[2px_2px_0_0_var(--color-green-200)] focus:border-dashed focus:border-green-200 focus:shadow-[2px_2px_0_0_var(--color-green-200)]"
    >
      <p
        className={cn(
          "text-preset-3 font-chakra-petch text-neutral-100 lowercase",
        )}
        style={{
          color: color,
        }}
      >
        {name}
      </p>
      <p className="text-preset-6 flex flex-col font-medium text-neutral-200 uppercase">
        <span>{descriptionFirstRow}</span>
        <span>{descriptionSecondRow}</span>
      </p>
    </Link>
  );
}
