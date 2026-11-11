import SadSquareBrokenIcon from "@/shared/icons/sad-square-broken-icon";

export default function ConferenceHeroSectionEmpty() {
  return (
    <section>
      <article className="relative flex min-h-55 flex-col items-center justify-center gap-y-4 bg-neutral-200 p-4 md:max-h-[400px] md:min-h-90 md:px-6 md:py-5 xl:flex-1 xl:px-8">
        <SadSquareBrokenIcon className="size-20 text-neutral-600" />
        <p className="text-preset-2 font-chakra-petch text-center text-neutral-900">
          We couldn&apos;t find any conference, please try again later
        </p>
      </article>
    </section>
  );
}
