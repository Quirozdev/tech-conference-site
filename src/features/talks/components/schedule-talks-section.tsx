import TalksSection from "@/features/talks/components/talks-section";
import { getTalksDays } from "@/features/talks/services/get-talks-days";

interface Props {
  searchParams: Promise<{
    day?: string;
    trackId?: string | string[];
    talkId?: string | string[];
  }>;
}

export default async function ScheduleTalksSection({ searchParams }: Props) {
  const [params, days] = await Promise.all([searchParams, getTalksDays()]);

  const day = params.day ? Number(params.day) : days[0]?.day;

  const trackIds = params.trackId
    ? Array.isArray(params.trackId)
      ? params.trackId
      : [params.trackId]
    : [];

  const talkIds = params.talkId
    ? Array.isArray(params.talkId)
      ? params.talkId
      : [params.talkId]
    : [];

  return (
    <TalksSection
      includeBookmark={true}
      highlightedOnly={false}
      day={day}
      trackIds={trackIds}
      talkIds={talkIds}
    />
  );
}
