import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "../_lib/cn";
import Menu from "./menu";
import NavList from "./nav-list";
import { useKeyDown } from "../_hooks/use-key-down";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const menuId = useId();

  const hideMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.classList.add("overflow-y-hidden");
    } else {
      document.documentElement.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.documentElement.classList.remove("overflow-y-hidden");
    };
  }, [isMobileMenuOpen]);

  useKeyDown({
    key: "Escape",
    onKeyDown: () => {
      hideMobileMenu();
      menuButtonRef.current?.focus();
    },
  });

  return (
    <>
      <nav aria-label="Main navigation">
        <div className="md:hidden">
          <Menu
            ref={menuButtonRef}
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={
              isMobileMenuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls={menuId}
          />
        </div>
        <NavList onNavigation={hideMobileMenu} className="hidden md:flex" />
      </nav>
      <nav
        id={menuId}
        aria-label="Mobile navigation"
        inert={!isMobileMenuOpen}
        className={cn(
          "absolute top-[calc(100%+1px)] left-0 -z-10 w-full bg-neutral-900 py-3 opacity-0 transition-opacity duration-500 ease-in-out md:hidden",
          isMobileMenuOpen && "z-10 min-h-dvh opacity-100",
        )}
      >
        <NavList onNavigation={hideMobileMenu} className="flex md:hidden" />
      </nav>
    </>
  );
}
