import { getTracks } from "@/features/tracks/services/get-tracks";
import SectionTitle from "@/shared/components/section-title";
import Track from "@/features/tracks/components/track";
import TracksSectionEmpty from "@/features/tracks/components/tracks-section-empty";

export default async function TracksSection() {
  const tracks = await getTracks();

  return (
    <section className="flex flex-col gap-y-5 xl:gap-y-6">
      <SectionTitle title="// TRACKS" />
      {tracks.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-4">
          {tracks.map((track) => {
            return <Track key={track.id} {...track} />;
          })}
        </div>
      ) : (
        <TracksSectionEmpty />
      )}
    </section>
  );
}
