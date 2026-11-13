import { getTracks } from "@/features/tracks/services/get-tracks";
import FooterLink from "@/shared/components/footer/footer-link";

export default async function FooterTracks() {
  const tracks = await getTracks();

  return (
    <div className="flex flex-col gap-y-4">
      <h3 className="text-preset-6 font-medium whitespace-nowrap text-green-200 uppercase">
        {"// Tracks"}
      </h3>
      {tracks.length > 0 ? (
        <div className="flex flex-col gap-y-3">
          {tracks.map((track) => {
            return (
              <FooterLink
                key={track.id}
                href={`/schedule?trackId=${track.id}`}
                label={track.name}
              />
            );
          })}
        </div>
      ) : (
        <FooterLink href="#" label="No tracks found" />
      )}
    </div>
  );
}
