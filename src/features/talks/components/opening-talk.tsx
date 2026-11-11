import { Conference } from "@/features/conference/types";
import { TalkWithRelations } from "@/features/talks/types";
import Button from "@/shared/components/button";
import {
  addToDate,
  extractDateComponentsFromIsoStringDateWithoutTime,
  formatDateToIsoStringWithoutTime,
  formatTimeString,
  MONTHS,
} from "@/shared/utils/dates";
import Image from "next/image";

interface Props {
  talk: TalkWithRelations;
  conference: Conference;
}

export default function OpeningTalk({ talk, conference }: Props) {
  const { day, month, year } =
    extractDateComponentsFromIsoStringDateWithoutTime(conference.startDate);

  const { day: openingTalkDay, month: openingTalkMonth } =
    extractDateComponentsFromIsoStringDateWithoutTime(
      formatDateToIsoStringWithoutTime(
        addToDate(new Date(year, month, day), {
          days: talk.day - 1,
        }),
      ),
    );

  return (
    <article
      className="overflow-hidden px-4 py-5 md:flex md:max-h-[400px] md:gap-y-5 md:px-6 md:py-6 xl:min-w-137"
      style={{
        backgroundColor: talk.track.color,
      }}
    >
      <div className="flex flex-col gap-y-8 md:flex-1 md:justify-between">
        <div className="flex flex-col gap-y-4">
          <p className="text-preset-6 text-neutral-900 uppercase">
            {`// FEATURED ${talk.track.name}`}
          </p>
          <div className="flex flex-col gap-y-2">
            <p className="text-preset-2 font-chakra-petch text-neutral-900 lowercase">
              {talk.speaker.name}
            </p>
            <p className="text-preset-6 flex flex-col font-medium text-neutral-600 uppercase">
              <span>{talk.speaker.role}</span>
              <span>@{talk.speaker.company}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
            <p className="text-preset-5 font-bold text-neutral-900 uppercase">
              {talk.title}
            </p>
            <p className="text-preset-6 font-medium text-neutral-600 uppercase">
              {MONTHS[openingTalkMonth]} {openingTalkDay} /{" "}
              {formatTimeString(talk.startTime)} / {talk.location}
            </p>
          </div>
          <Button
            as="link"
            href={`/schedule?talk=${talk.id}`}
            label="View Talk"
            variant="secondary"
            className="md:w-fit"
          />
        </div>
      </div>
      <div className="relative md:flex-1">
        <Image
          src={talk.speaker.avatar}
          width={636}
          height={500}
          alt={`${talk.speaker.name}'s profile picture`}
          className="absolute top-6 -left-12 z-10 hidden h-full min-w-120 md:block xl:-left-16"
        />
        <div className="absolute -top-14 -right-24 hidden h-46 w-46 rounded-full border-2 border-black/8 md:block xl:hidden"></div>
        <div className="absolute top-8 -right-8 hidden h-31 w-31 rounded-full border-2 border-black/8 md:block xl:hidden"></div>
      </div>
    </article>
  );
}
