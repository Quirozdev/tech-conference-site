import TalksSection from "@/features/talks/components/talks-section";

interface Props {
  searchParams: Promise<{
    day?: string | string[];
    trackId?: string | string[];
    talkId?: string | string[];
  }>;
}

export default async function ScheduleTalksSection({ searchParams }: Props) {
  const params = await searchParams;

  const days = params.day
    ? Array.isArray(params.day)
      ? params.day
      : [params.day]
    : [];

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
      days={days.map(Number)}
      trackIds={trackIds}
      talkIds={talkIds}
    />
  );
}
