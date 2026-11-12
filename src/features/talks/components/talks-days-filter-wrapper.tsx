import TalksDaysFilter from "@/features/talks/components/talks-days-filter";
import { getTalksDays } from "@/features/talks/services/get-talks-days";

export default async function TalksDaysFilterWrapper() {
  const talksDays = await getTalksDays();

  return <TalksDaysFilter days={talksDays.map((talkDay) => talkDay.day)} />;
}
