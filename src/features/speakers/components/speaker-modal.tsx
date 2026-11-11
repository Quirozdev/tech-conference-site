import SectionTitle from "@/shared/components/section-title";
import Separator from "@/shared/components/separator";
import SmallButton from "@/shared/components/small-button";
import { useRemoveVerticalScrolling } from "@/shared/hooks/use-remove-vertical-scrolling";
import Schedule from "@/features/talks/components/schedule";
import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import type { SpeakerWithRelations } from "@/features/speakers/types";

interface Props extends SpeakerWithRelations {
  isOpen: boolean;
  onClose: () => void;
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
              style={{ backgroundColor: props.talk[0].track.color }}
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
            <p className="text-preset-6 flex flex-col font-medium text-neutral-200 uppercase md:flex-row md:items-center">
              <span>{props.role} @</span>
              <span>{props.company}</span>
            </p>
          </div>
        </div>
        <Separator />
        <p className="text-preset-6 text-neutral-200">{props.bio}</p>
        <Separator />
        <SectionTitle title="// TALK" />
        <Schedule
          includeDetailsSection={false}
          id={props.talk[0].id}
          title={props.talk[0].title}
          day={props.talk[0].day}
          startTime={props.talk[0].startTime}
          endTime={props.talk[0].endTime}
          location={props.talk[0].location}
          description={props.talk[0].description}
          highlighted={props.talk[0].highlighted}
          speakerId={props.talk[0].speakerId}
          trackId={props.talk[0].trackId}
          conferenceId={props.talk[0].conferenceId}
          speaker={{
            id: props.id,
            name: props.name,
            role: props.role,
            company: props.company,
            avatar: props.avatar,
            bio: props.bio,
            featured: props.featured,
          }}
          track={{
            ...props.talk[0].track,
          }}
        />
      </dialog>
    )
  );
}
