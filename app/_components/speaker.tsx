"use client";

import Separator from "@/app/_components/separator";
import SpeakerModal from "@/app/_components/speaker-modal";
import Image from "next/image";
import { useState } from "react";

interface Props {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  talk: {
    id: string;
    title: string;
    day: number;
    startTime: string;
    endTime: string;
    location: string;
    description: string;
    track: {
      id: string;
      name: string;
      description: string;
      color: string;
    };
  };
}

export default function Speaker(props: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="flex cursor-pointer flex-col border border-neutral-600 bg-neutral-800 outline-none hover:border-neutral-100 hover:shadow-[4px_4px_0_0_var(--color-neutral-100)] focus:border-dashed focus:border-green-200 focus:shadow-[4px_4px_0_0_var(--color-green-200)]"
        onClick={() => setIsModalOpen(true)}
      >
        <span
          style={{ backgroundColor: props.talk.track.color }}
          className="relative flex justify-center"
        >
          <Image
            src="/images/pattern-avatar-bg.svg"
            width={32}
            height={250}
            alt=""
            className="absolute top-0 left-0 h-auto w-full object-cover"
          />
          <Image
            src={props.avatar}
            width={636}
            height={500}
            alt={`${props.name}'s avatar`}
            className="z-10 h-62.5 w-79.5"
          />
        </span>
        <span className="flex flex-col gap-y-3 p-4 text-left">
          <span className="flex flex-col gap-y-1">
            <span className="text-preset-3 font-chakra-petch text-neutral-100 lowercase">
              {props.name}
            </span>
            <span className="text-preset-6 flex flex-col font-medium text-neutral-200 uppercase">
              <span>{props.role} @</span>
              <span>{props.company}</span>
            </span>
          </span>
          <Separator />
          <span className="text-preset-6 font-medium text-green-200 uppercase">
            {props.talk.title}
          </span>
        </span>
      </button>
      <SpeakerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        {...props}
      />
    </>
  );
}
