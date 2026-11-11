import SadSquareBrokenIcon from "@/shared/icons/sad-square-broken-icon";

export default function OpeningTalkEmpty() {
  return (
    <article className="flex min-h-86 flex-col items-center justify-center gap-4 bg-cyan-100 px-4 py-5 md:max-h-[400px] md:min-h-89 md:gap-y-5 md:px-6 md:py-6 xl:min-h-91 xl:min-w-137">
      <SadSquareBrokenIcon className="size-20 text-neutral-600" />
      <p className="text-preset-2 font-chakra-petch text-center text-neutral-900">
        No opening talk found
      </p>
    </article>
  );
}
