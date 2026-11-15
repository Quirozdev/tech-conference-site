"use client";

import { useBookmarkStore } from "@/features/talks/stores/bookmark-store";
import ToggleControlButton from "@/shared/components/control-buttons/toggle-control-button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function MyScheduleTalksFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryString = searchParams.toString();

  const bookmarkedTalks = useBookmarkStore((state) => state.bookmarkedTalks);

  const hasHydrated = useBookmarkStore((state) => state.hasHydrated);

  const isSelected = searchParams.get("mySchedule") === "true";

  useEffect(() => {
    if (!isSelected || !hasHydrated) return;

    const params = new URLSearchParams(queryString);

    const currentTalkIds = new Set(params.getAll("talkId"));
    const nextTalkIds = [...new Set(bookmarkedTalks)];

    const areEqual =
      currentTalkIds.size === nextTalkIds.length &&
      nextTalkIds.every((id) => currentTalkIds.has(id));

    if (areEqual) return;

    params.delete("talkId");

    nextTalkIds.forEach((talkId) => {
      params.append("talkId", talkId);
    });

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }, [bookmarkedTalks, isSelected, hasHydrated, pathname, router, queryString]);

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
      onClick={toggleBookmarked}
      disabled={!hasHydrated}
    >
      My Schedule
    </ToggleControlButton>
  );
}
