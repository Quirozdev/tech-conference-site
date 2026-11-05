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
  };
}

export default function Speaker({
  id,
  name,
  role,
  company,
  avatar,
  bio,
  talk,
}: Props) {
  return (
    <button className="flex cursor-pointer flex-col border border-neutral-600 bg-neutral-800">
      <Image
        src={avatar}
        width={636}
        height={500}
        alt={`${name}'s avatar`}
        className="h-62.5 w-79.5 self-center"
      />
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
