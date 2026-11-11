import SadTabIcon from "@/shared/icons/sad-tab-icon";

export default function TalksSectionEmpty() {
  return (
    <div className="flex min-h-55 flex-col items-center justify-center gap-y-4 bg-neutral-200 p-4 md:max-h-[400px] md:min-h-90 md:px-6 md:py-5 xl:flex-1 xl:px-8">
      <SadTabIcon className="size-20 text-neutral-600" />
      <p className="text-preset-2 font-chakra-petch text-center text-neutral-900">
        No talks were found
      </p>
    </div>
  );
}
