import NavButton from "@/shared/components/header/nav-button";
import { cn } from "@/shared/utils/cn";

interface Props extends React.ComponentProps<"ul"> {
  onNavigation: () => void;
}

export default function NavList({ onNavigation, className, ...props }: Props) {
  return (
    <ul
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-center",
        className,
      )}
      {...props}
    >
      <li>
        <NavButton href="/" label="Home" onNavigation={onNavigation} />
      </li>
      <li>
        <NavButton
          href="/schedule"
          label="Schedule"
          onNavigation={onNavigation}
        />
      </li>
      <li>
        <NavButton
          href="/speakers"
          label="Speakers"
          onNavigation={onNavigation}
        />
      </li>
    </ul>
  );
}
