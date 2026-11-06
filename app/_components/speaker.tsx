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
    track: {
      id: string;
      name: string;
      description: string;
      color: string;
    };
  };
}

export default function Speaker({ name, role, company, avatar, talk }: Props) {
  return (
    <button className="flex cursor-pointer flex-col border border-neutral-600 bg-neutral-800 outline-none hover:border-neutral-100 hover:shadow-[4px_4px_0_0_var(--color-neutral-100)] focus:border-dashed focus:border-green-200 focus:shadow-[4px_4px_0_0_var(--color-green-200)]">
      <span
        style={{ backgroundColor: talk.track.color }}
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
          src={avatar}
          width={636}
          height={500}
          alt={`${name}'s avatar`}
          className="z-10 h-62.5 w-79.5"
        />
      </span>
      <span className="flex flex-col gap-y-3 p-4 text-left">
        <span className="flex flex-col gap-y-1">
          <span className="text-preset-3 font-chakra-petch text-neutral-100 lowercase">
            {name}
          </span>
          <span className="text-preset-6 flex flex-col font-medium text-neutral-200 uppercase">
            <span>{role} @</span>
            <span>{company}</span>
          </span>
        </span>
        <span className="h-px w-full bg-neutral-600"></span>
        <span className="text-preset-6 font-medium text-green-200 uppercase">
          {talk.title}
        </span>
      </span>
    </button>
  );
}
