import SmallButton from "@/shared/components/small-button";
import Image from "next/image";

interface Props extends React.ComponentPropsWithRef<"button"> {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Menu({ isOpen, onToggle, ...props }: Props) {
  return (
    <SmallButton type="button" onClick={onToggle} {...props}>
      {isOpen ? (
        <Image src="/images/icon-cross.svg" width={20} height={20} alt="" />
      ) : (
        <Image src="/images/icon-menu.svg" width={20} height={20} alt="" />
      )}
    </SmallButton>
  );
}
