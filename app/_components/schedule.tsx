import BookmarkButton from "@/app/_components/bookmark-button";
import Image from "next/image";

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

export default function Schedule(props: Props) {
  return (
    <div className="flex flex-col border border-neutral-600 md:flex-row">
      <div className="flex justify-center border border-neutral-900 bg-neutral-800 text-center">
        <p
          className="text-preset-6 py-1.5 font-medium uppercase md:py-2.5 md:[writing-mode:sideways-lr]"
          style={{ color: props.talk.track.color }}
        >
          {props.talk.track.name}
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div
          className="flex flex-col gap-y-4 p-4 md:p-6"
          style={{ backgroundColor: props.talk.track.color }}
        >
          <div className="flex flex-col gap-y-2">
            <p className="text-preset-2 font-chakra-petch text-neutral-900 lowercase">
              {props.talk.title}
            </p>
            <div className="flex items-center gap-x-2.5">
              <p className="text-preset-5 font-bold text-neutral-900 uppercase">
                {props.name}
              </p>
              <p className="text-preset-5 text-neutral-600">{"//"}</p>
              <p className="text-preset-5 text-neutral-600">{props.company}</p>
            </div>
          </div>
        </div>
        <div
          className="flex items-center gap-2 border-t border-dashed border-neutral-900 px-4 py-2 md:flex-col md:border-t-0 md:border-l"
          style={{ backgroundColor: props.talk.track.color }}
        >
          <div className="flex flex-col items-center text-center">
            <p className="text-preset-4 font-chakra-petch text-neutral-900">
              {props.talk.startTime}
            </p>
            <p className="text-preset-7 text-neutral-900">
              {props.talk.endTime}
            </p>
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
