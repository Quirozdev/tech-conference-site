"use client";

import { useBookmarkStore } from "@/features/talks/stores/bookmark-store";
import ToggleControlButton from "@/shared/components/control-buttons/toggle-control-button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MyScheduleTalksFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const bookmarkedTalks = useBookmarkStore((state) => state.bookmarkedTalks);

  const isSelected = searchParams.get("mySchedule") === "true";

  function toggleBookmarked() {
    const params = new URLSearchParams(searchParams.toString());

    if (isSelected) {
      params.delete("mySchedule");
      params.delete("talkId");
    } else {
      params.set("mySchedule", "true");
      params.delete("talkId");

      [...new Set(bookmarkedTalks)].forEach((talkId) => {
        params.append("talkId", talkId);
      });
    }

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }

  return (
    <ToggleControlButton
      isSelected={isSelected}
      onClick={() => {
        toggleBookmarked();
      }}
    >
      My Schedule
    </ToggleControlButton>
  );
}
