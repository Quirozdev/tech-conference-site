import Schedule from "@/app/_components/schedule";
import SectionTitle from "@/app/_components/section-title";
import Separator from "@/app/_components/separator";
import SmallButton from "@/app/_components/small-button";
import { useRemoveVerticalScrolling } from "@/app/_hooks/use-remove-vertical-scrolling";
import Image from "next/image";
import { useEffect, useId, useRef } from "react";

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
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const id = useId();

  useRemoveVerticalScrolling({ shouldRemove: props.isOpen });

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (props.isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!props.isOpen && dialog.open) {
      dialog.close();
    }
  }, [props.isOpen]);

  return (
    props.isOpen && (
      <dialog
        ref={dialogRef}
        onClose={props.onClose}
        closedby="any"
        aria-labelledby={id}
        className="fixed top-1/2 left-1/2 flex max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col gap-y-4 overflow-y-auto border border-neutral-500 bg-neutral-900 px-4 py-5 backdrop:bg-neutral-900/75 md:w-[calc(100%-2.5rem)] md:gap-y-5 md:px-10 md:py-10"
      >
        <SmallButton
          type="button"
          aria-label="Close speaker details"
          onClick={props.onClose}
          className="absolute top-5 right-5 hidden md:block"
        >
          <Image src="/images/icon-cross.svg" width={20} height={20} alt="" />
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
      </dialog>
    )
  );
}
