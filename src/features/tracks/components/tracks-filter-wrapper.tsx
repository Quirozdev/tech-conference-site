import { getTracks } from "@/features/tracks/services/get-tracks";
import FilterControlButton from "@/shared/components/control-buttons/filter-control-button";

export default async function TracksFilterWrapper() {
  const tracks = await getTracks();

  return (
    <>
      {tracks.map((track, index) => {
        return (
          <FilterControlButton key={track.id} isSelected={index === 0}>
            {track.name}
          </FilterControlButton>
        );
      })}
    </>
  );
}
