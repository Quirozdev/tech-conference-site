"use client";

import { Track } from "@/features/tracks/types";
import FilterControlButton from "@/shared/components/control-buttons/filter-control-button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  tracks: Track[];
}

export default function TracksFilter({ tracks }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedTracksIds = searchParams.getAll("trackId");

  function toggleTrack(trackId: string) {
    const params = new URLSearchParams(searchParams.toString());
    const selected = new Set(params.getAll("trackId"));

    if (selected.has(trackId)) {
      selected.delete(trackId);
    } else {
      selected.add(trackId);
    }

    params.delete("trackId");

    selected.forEach((value) => params.append("trackId", value));

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }

  return (
    <>
      {tracks.map((track) => {
        return (
          <FilterControlButton
            key={track.id}
            isSelected={selectedTracksIds.includes(track.id)}
            onClick={() => {
              toggleTrack(track.id);
            }}
          >
            {track.name}
          </FilterControlButton>
        );
      })}
    </>
  );
}
