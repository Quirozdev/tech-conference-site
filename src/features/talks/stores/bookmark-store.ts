import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BookmarkStore {
  bookmarkedTalks: string[];
  toggleBookmark: (talkId: string) => void;
}

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set) => ({
      bookmarkedTalks: [],
      toggleBookmark: (talkId: string) =>
        set((state) => ({
          bookmarkedTalks: state.bookmarkedTalks.includes(talkId)
            ? state.bookmarkedTalks.filter((id) => id !== talkId)
            : [...state.bookmarkedTalks, talkId],
        })),
    }),
    {
      name: "talk-bookmarks",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
