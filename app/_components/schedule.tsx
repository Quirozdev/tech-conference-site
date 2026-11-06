"use client";

import BookmarkButton from "@/app/_components/bookmark-button";
import Separator from "@/app/_components/separator";
import Image from "next/image";
import { useState } from "react";

interface Props {
  includeDetailsSection: boolean;
  id: string;
  title: string;
  day: number;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  speaker: {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    bio: string;
  };
  track: {
    id: string;
    name: string;
    description: string;
    color: string;
  };
}

export default function Schedule(props: Props) {
  const [isDetailsShown, setIsDetailsShown] = useState(false);

  return (
    <div className="flex flex-col border border-neutral-600 md:flex-row">
      <div className="flex justify-center border border-neutral-900 bg-neutral-800 text-center">
        <p
          className="text-preset-6 py-1.5 font-medium uppercase md:py-2.5 md:[writing-mode:sideways-lr]"
          style={{ color: props.track.color }}
        >
          {props.track.name}
        </p>
      </div>
      <div className="flex flex-1 flex-col md:flex-row">
        <div
          className="flex flex-1 flex-col gap-y-4 p-4 md:gap-y-3 md:p-6"
          style={{ backgroundColor: props.track.color }}
        >
          <div className="flex flex-col gap-y-2">
            <p className="text-preset-2 font-chakra-petch text-neutral-900 lowercase">
              {props.title}
            </p>
            <div className="flex items-center gap-x-2.5">
              <p className="text-preset-5 font-bold text-neutral-900 uppercase">
                {props.speaker.name}
              </p>
              <p className="text-preset-5 text-neutral-600">{"//"}</p>
              <p className="text-preset-5 text-neutral-600">
                {props.speaker.company}
              </p>
            </div>
          </div>
          {isDetailsShown && <Separator className="opacity-10" />}
          {isDetailsShown && (
            <p className="text-preset-6 text-neutral-900">
              {props.description}
            </p>
          )}
          {isDetailsShown && (
            <p className="text-preset-6 font-medium text-neutral-900 uppercase">
              Location: {props.location}
            </p>
          )}
          <button
            aria-pressed={isDetailsShown}
            className="flex cursor-pointer items-center uppercase"
            onClick={() => setIsDetailsShown((prev) => !prev)}
          >
            {isDetailsShown ? (
              <Image
                src="/images/icon-minus.svg"
                width={16}
                height={16}
                alt=""
              />
            ) : (
              <Image
                src="/images/icon-plus.svg"
                width={16}
                height={16}
                alt=""
              />
            )}

            <span className="text-preset-7 text-neutral-600">
              {isDetailsShown ? "Hide details" : "Show details"}
            </span>
          </button>
        </div>
        <div
          className="flex items-center gap-2 border-t border-dashed border-neutral-900 px-4 py-2 md:flex-col md:border-t-0 md:border-l"
          style={{ backgroundColor: props.track.color }}
        >
          <div className="flex flex-col items-center text-center">
            <p className="text-preset-4 font-chakra-petch text-neutral-900">
              {props.startTime}
            </p>
            <p className="text-preset-7 text-neutral-900">{props.endTime}</p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/images/pattern-barcode.svg"
              width={122}
              height={40}
              alt="Barcode"
            />
          </div>
          <BookmarkButton />
        </div>
      </div>
    </div>
  );
}
