export const MONTHS: Record<number, string> = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sept",
  9: "Oct",
  10: "Nov",
  11: "Dec",
} as const;

export function extractDateComponentsFromIsoStringDateWithoutTime(
  date: string,
) {
  const [year, month, day] = date.split("-");
  return { year: Number(year), month: Number(month) - 1, day: Number(day) };
}

export function getLabelBetweenTwoIsoStringDates(
  startDate: string,
  endDate: string,
) {
  const {
    day: startDateDay,
    month: startDateMonth,
    year: startDateYear,
  } = extractDateComponentsFromIsoStringDateWithoutTime(startDate);

  const {
    day: endDateDay,
    month: endDateMonth,
    year: endDateYear,
  } = extractDateComponentsFromIsoStringDateWithoutTime(endDate);

  const monthLabel =
    startDateMonth === endDateMonth
      ? MONTHS[startDateMonth]
      : `${MONTHS[startDateMonth]}-${MONTHS[endDateMonth]}`;

  const dayLabel =
    startDateDay === endDateDay ? endDateDay : `${startDateDay}-${endDateDay}`;

  const yearLabel =
    startDateYear === endDateYear
      ? endDateYear
      : `${startDateYear}-${endDateYear}`;

  return `${monthLabel} ${dayLabel}, ${yearLabel}`;
}

export function formatTimeString(timeString: string) {
  return timeString.split(":").slice(0, 2).join(":");
}
