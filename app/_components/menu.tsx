import Image from "next/image";

interface Props extends React.ComponentPropsWithRef<"button"> {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Menu({ isOpen, onToggle, ...props }: Props) {
  return (
    <button
      type="button"
      className="flex size-10 cursor-pointer items-center justify-center border border-neutral-100 p-2.5 outline-none hover:bg-neutral-900 hover:shadow-[2px_2px_0_0_var(--color-neutral-100)] focus:border-dashed focus:border-green-200 focus:bg-neutral-800 focus:shadow-[2px_2px_0_0_var(--color-green-200)]"
      onClick={onToggle}
      {...props}
    >
      {isOpen ? (
        <Image src="/images/icon-cross.svg" width={20} height={20} alt="" />
      ) : (
        <Image src="/images/icon-menu.svg" width={20} height={20} alt="" />
      )}
    </button>
  );
}
