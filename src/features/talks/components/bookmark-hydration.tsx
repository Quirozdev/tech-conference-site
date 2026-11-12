"use client";

import { useBookmarkStore } from "@/features/talks/stores/bookmark-store";
import { useEffect } from "react";

export default function BookmarkHydration() {
  useEffect(() => {
    useBookmarkStore.persist.rehydrate();
  }, []);

  return null;
}
