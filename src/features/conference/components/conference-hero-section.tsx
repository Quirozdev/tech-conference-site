import { getConference } from "@/features/conference/services/get-conference";
import { getOpeningTalk } from "@/features/talks/services/get-opening-talk";
import Button from "@/shared/components/button";
import {
  addToDate,
  extractDateComponentsFromIsoStringDateWithoutTime,
  formatDateToIsoStringWithoutTime,
  formatTimeString,
  getLabelBetweenTwoIsoStringDates,
  MONTHS,
} from "@/shared/utils/dates";
import Image from "next/image";

export default async function ConferenceHeroSection() {
  const conference = await getConference();
  const openingTalk = await getOpeningTalk(conference.id);

  const conferenceDatesLabel = getLabelBetweenTwoIsoStringDates(
    conference.startDate,
    conference.endDate,
  );

  const { day, month, year } =
    extractDateComponentsFromIsoStringDateWithoutTime(conference?.startDate);

  const { day: openingTalkDay, month: openingTalkMonth } =
    extractDateComponentsFromIsoStringDateWithoutTime(
      formatDateToIsoStringWithoutTime(
        addToDate(new Date(year, month, day), {
          days: openingTalk?.day - 1,
        }),
      ),
    );

  return (
    <section className="flex flex-col gap-y-6 xl:flex-row xl:gap-x-8">
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
      <article
        className="overflow-hidden px-4 py-5 md:flex md:max-h-[400px] md:gap-y-5 md:px-6 md:py-6 xl:min-w-137"
        style={{
          backgroundColor: openingTalk?.track.color,
        }}
      >
        <div className="flex flex-col gap-y-8 md:flex-1 md:justify-between">
          <div className="flex flex-col gap-y-4">
            <p className="text-preset-6 text-neutral-900 uppercase">
              {`// FEATURED ${openingTalk?.track.name}`}
            </p>
            <div className="flex flex-col gap-y-2">
              <p className="text-preset-2 font-chakra-petch text-neutral-900 lowercase">
                {openingTalk?.speaker.name}
              </p>
              <p className="text-preset-6 flex flex-col font-medium text-neutral-600 uppercase">
                <span>{openingTalk?.speaker.role}</span>
                <span>@{openingTalk?.speaker.company}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <p className="text-preset-5 font-bold text-neutral-900 uppercase">
                {openingTalk?.title}
              </p>
              <p className="text-preset-6 font-medium text-neutral-600 uppercase">
                {MONTHS[openingTalkMonth]} {openingTalkDay} /{" "}
                {formatTimeString(openingTalk?.startTime)} /{" "}
                {openingTalk?.location}
              </p>
            </div>
            <Button
              as="link"
              href={`/schedule?talk=${openingTalk.id}`}
              label="View Talk"
              variant="secondary"
              className="md:w-fit"
            />
          </div>
        </div>
        <div className="relative md:flex-1">
          <Image
            src={openingTalk?.speaker.avatar}
            width={636}
            height={500}
            alt={`${openingTalk?.speaker.name}'s profile picture`}
            className="absolute top-6 -left-12 z-10 hidden h-full min-w-120 md:block xl:-left-16"
          />
          <div className="absolute -top-14 -right-24 hidden h-46 w-46 rounded-full border-2 border-black/8 md:block xl:hidden"></div>
          <div className="absolute top-8 -right-8 hidden h-31 w-31 rounded-full border-2 border-black/8 md:block xl:hidden"></div>
        </div>
      </article>
    </section>
  );
}
