"use client";

import { useBookmarkStore } from "@/features/talks/stores/bookmark-store";
import { Talk } from "@/features/talks/types";
import Image from "next/image";

interface Props {
  talkId: Talk["id"];
}

export default function BookmarkButton({ talkId }: Props) {
  const isAlreadyBookmarked = useBookmarkStore((state) =>
    state.bookmarkedTalks.includes(talkId),
  );

  const toggleBookmarkedTalk = useBookmarkStore(
    (state) => state.toggleBookmark,
  );

  return (
    <button
      className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-center outline-none hover:border-neutral-800 hover:bg-neutral-800 focus:border-dashed focus:border-green-200 focus:bg-neutral-900"
      aria-pressed={isAlreadyBookmarked}
      aria-label={isAlreadyBookmarked ? "Remove bookmark" : "Add bookmark"}
      onClick={() => toggleBookmarkedTalk(talkId)}
    >
      {isAlreadyBookmarked ? (
        <Image
          src="/images/icon-star-filled.svg"
          width={17}
          height={16}
          alt=""
        />
      ) : (
        <Image
          src="/images/icon-star-empty.svg"
          width={17}
          height={16}
          alt=""
        />
      )}
    </button>
  );
}
