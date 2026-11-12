import { getTalksDays } from "@/features/talks/services/get-talks-days";
import TabControlButton from "@/shared/components/control-buttons/tab-control-button";

export default async function TalksDaysFilterWrapper() {
  const talksDays = await getTalksDays();

  return (
    <div role="tablist" className="flex flex-wrap items-center gap-5">
      {talksDays.map((talkDay, index) => {
        return (
          <TabControlButton key={talkDay.day} isSelected={index === 0}>
            Day {String(talkDay.day).padStart(2, "0")}
          </TabControlButton>
        );
      })}
    </div>
  );
}
