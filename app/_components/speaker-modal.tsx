import Schedule from "@/app/_components/schedule";
import SectionTitle from "@/app/_components/section-title";
import Separator from "@/app/_components/separator";
import SmallButton from "@/app/_components/small-button";
import { useClickOutside } from "@/app/_hooks/use-click-outside";
import { useKeyDown } from "@/app/_hooks/use-key-down";
import { useRemoveVerticalScrolling } from "@/app/_hooks/use-remove-vertical-scrolling";
import Image from "next/image";
import { useId, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  talk: {
    id: string;
    title: string;
    startTime: string;
    endTime: string;
    track: {
      id: string;
      name: string;
      description: string;
      color: string;
    };
  };
}

export default function SpeakerModal(props: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const id = useId();

  useKeyDown({
    key: "Escape",
    onKeyDown: props.onClose,
  });

  useClickOutside({
    ref: containerRef,
    onClickOutside: props.onClose,
  });

  useRemoveVerticalScrolling({ shouldRemove: props.isOpen });

  return (
    props.isOpen && (
      <>
        <div className="fixed top-0 left-0 z-50 h-full w-full bg-neutral-900 opacity-75"></div>
        <div className="fixed inset-0 z-60 grid w-full place-items-center overflow-y-auto px-4 md:px-5">
          <div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={id}
            className="relative mx-auto flex max-w-[800px] flex-col gap-y-4 border border-neutral-500 bg-neutral-900 px-4 py-5 md:gap-y-5 md:px-10 md:py-10"
          >
            <SmallButton
              type="button"
              aria-label="Close speaker details"
              onClick={props.onClose}
              className="absolute top-5 right-5 hidden md:block"
            >
              <Image
                src="/images/icon-cross.svg"
                width={20}
                height={20}
                alt=""
              />
            </SmallButton>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex items-start justify-between">
                <div
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
                    alt={`${props.name}'s profile picture`}
                    className="z-10 h-30 w-38"
                  />
                </div>
                <SmallButton
                  type="button"
                  aria-label="Close speaker details"
                  onClick={props.onClose}
                  className="md:hidden"
                >
                  <Image
                    src="/images/icon-cross.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </SmallButton>
              </div>
              <div className="flex flex-col gap-y-1">
                <p
                  id={id}
                  className="text-preset-3 font-chakra-petch text-neutral-100 lowercase"
                >
                  {props.name}
                </p>
                <p className="text-preset-6 flex flex-col font-medium text-neutral-200 uppercase">
                  <span>{props.role} @</span>
                  <span>{props.company}</span>
                </p>
              </div>
            </div>
            <Separator />
            <p className="text-preset-6 text-neutral-200">{props.bio}</p>
            <Separator />
            <SectionTitle title="// TALK" />
            <Schedule {...props} />
          </div>
        </div>
      </>
    )
  );
}
