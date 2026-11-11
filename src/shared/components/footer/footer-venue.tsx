import { getConference } from "@/features/conference/services/get-conference";
import { getLabelBetweenTwoIsoStringDates } from "@/shared/utils/dates";

export default async function FooterVenue() {
  const conference = await getConference();

  return (
    <div className="flex flex-col gap-y-4">
      <h3 className="text-preset-6 font-medium whitespace-nowrap text-green-200 uppercase">
        {"// Venue"}
      </h3>
      <div className="flex flex-col gap-y-3">
        <p className="text-preset-6 flex flex-col text-neutral-200">
          {conference ? (
            <>
              <span>{conference.location.venue}</span>
              <span>
                {conference.location.city}, {conference.location.state}
              </span>
              <span>
                {getLabelBetweenTwoIsoStringDates(
                  conference.startDate,
                  conference.endDate,
                )}
              </span>
            </>
          ) : (
            <>
              <span>Unknown location</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
