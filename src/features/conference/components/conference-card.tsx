import { ConferenceWithLocation } from "@/features/conference/types";
import { getLabelBetweenTwoIsoStringDates } from "@/shared/utils/dates";
import Image from "next/image";

interface Props {
  conference: ConferenceWithLocation;
}

export default function ConferenceCard({ conference }: Props) {
  const conferenceDatesLabel = getLabelBetweenTwoIsoStringDates(
    conference.startDate,
    conference.endDate,
  );

  return (
    <article className="relative flex min-h-55 flex-col justify-between bg-neutral-100 p-4 md:max-h-[400px] md:min-h-90 md:px-6 md:py-5 xl:flex-1 xl:px-8">
      <h1 className="text-preset-1 font-chakra-petch text-neutral-900">
        {conference.tagline}
      </h1>
      <Image
        src="/images/bg-horizon-text.svg"
        width={554}
        height={128}
        alt=""
        className="absolute top-1/2 left-1/2 h-16 w-69.25 -translate-x-1/2 -translate-y-1/2 text-center md:h-32 md:w-138.5"
      />
      <div className="flex items-center justify-between border-t-2 border-neutral-900 pt-4">
        <p className="text-preset-6 text-neutral-900 uppercase">
          {conferenceDatesLabel}
        </p>
        <p className="text-preset-6 text-neutral-900 uppercase">
          {conference.location.venue}, {conference.location.cityAbbreviation}
        </p>
      </div>
    </article>
  );
}
