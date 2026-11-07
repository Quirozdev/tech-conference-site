import { NAV_LINKS } from "@/core/config/navigation.config";
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
      {NAV_LINKS.map((navLink) => {
        return (
          <li key={navLink.href}>
            <NavButton
              href={navLink.href}
              label={navLink.label}
              onNavigation={onNavigation}
            />
          </li>
        );
      })}
    </ul>
  );
}
