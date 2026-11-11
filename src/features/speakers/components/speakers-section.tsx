import SpeakerWrapper from "@/features/speakers/components/speaker-wrapper";
import { getSpeakers } from "@/features/speakers/services/get-speakers";
import Button from "@/shared/components/button";
import SectionTitle from "@/shared/components/section-title";
import Speaker from "@/features/speakers/components/speaker";

interface Props {
  featuredOnly: boolean;
}

export default async function SpeakersSection({ featuredOnly }: Props) {
  const speakers = await getSpeakers(featuredOnly);

  return (
    <section className="flex flex-col gap-y-6">
      <SectionTitle title="// FEATURED_SPEAKERS" />
      <SpeakerWrapper>
        {speakers.map((speaker) => {
          return <Speaker key={speaker.id} {...speaker} />;
        })}
      </SpeakerWrapper>
      <Button
        as="link"
        href="/speakers"
        variant="primary"
        label="View all speakers"
        className="mx-auto w-fit"
      />
    </section>
  );
}
