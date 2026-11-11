import SpeakerWrapper from "@/features/speakers/components/speaker-wrapper";
import { getSpeakers } from "@/features/speakers/services/get-speakers";
import Button from "@/shared/components/button";
import SectionTitle from "@/shared/components/section-title";
import Speaker from "@/features/speakers/components/speaker";
import SpeakersSectionEmpty from "@/features/speakers/components/speakers-section-empty";

interface Props {
  featuredOnly: boolean;
  title?: string;
}

export default async function SpeakersSection({ featuredOnly, title }: Props) {
  const speakers = await getSpeakers(featuredOnly);

  return (
    <section className="flex flex-col gap-y-6">
      {title && <SectionTitle title={title} />}
      {speakers.length > 0 ? (
        <SpeakerWrapper>
          {speakers.map((speaker) => {
            return <Speaker key={speaker.id} {...speaker} />;
          })}
        </SpeakerWrapper>
      ) : (
        <SpeakersSectionEmpty />
      )}
      {featuredOnly && (
        <Button
          as="link"
          href="/speakers"
          variant="primary"
          label="View all speakers"
          className="mx-auto w-fit"
        />
      )}
    </section>
  );
}
