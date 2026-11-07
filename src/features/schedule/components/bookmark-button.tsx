"use client";

import Image from "next/image";
import { useState } from "react";

export default function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <button
      className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-center outline-none hover:border-neutral-800 hover:bg-neutral-800 focus:border-dashed focus:border-green-200 focus:bg-neutral-900"
      aria-pressed={isBookmarked}
      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      onClick={() => setIsBookmarked((prev) => !prev)}
    >
      {isBookmarked ? (
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
