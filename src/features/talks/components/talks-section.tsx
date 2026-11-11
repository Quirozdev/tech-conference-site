import ConferenceEmpty from "@/features/conference/components/conference-empty";
import { getConference } from "@/features/conference/services/get-conference";
import Schedule from "@/features/talks/components/schedule";
import { getTalks } from "@/features/talks/services/get-talks";
import Button from "@/shared/components/button";
import SectionTitle from "@/shared/components/section-title";

interface Props {
  highlightedOnly: boolean;
  includeBookmark: boolean;
}

export default async function TalksSection({
  highlightedOnly,
  includeBookmark,
}: Props) {
  const conference = await getConference();

  if (!conference) {
    return <ConferenceEmpty />;
  }

  const talks = await getTalks(conference?.id, highlightedOnly);

  return (
    <section className="flex flex-col gap-y-6">
      <SectionTitle title="// SCHEDULE_HIGHLIGHTS" />
      <div className="flex flex-col gap-y-4">
        {talks.map((talk) => {
          return (
            <Schedule
              key={talk.id}
              includeDetailsSection={true}
              includeBookmark={includeBookmark}
              {...talk}
            />
          );
        })}
      </div>
      {highlightedOnly && (
        <Button
          as="link"
          href="/schedule"
          variant="primary"
          label="View full schedule"
          className="mx-auto mt-6 w-fit"
        />
      )}
    </section>
  );
}
