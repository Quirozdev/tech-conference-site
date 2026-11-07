"use client";

import Menu from "@/shared/components/header/menu";
import NavList from "@/shared/components/header/nav-list";
import { useKeyDown } from "@/shared/hooks/use-key-down";
import { useRemoveVerticalScrolling } from "@/shared/hooks/use-remove-vertical-scrolling";
import { cn } from "@/shared/utils/cn";
import { useCallback, useId, useRef, useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const menuId = useId();

  const hideMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useRemoveVerticalScrolling({ shouldRemove: isMobileMenuOpen });

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
          "absolute top-[calc(100%+1px)] left-0 z-10 w-full bg-neutral-900 py-3 opacity-0 transition-opacity duration-500 ease-in-out md:hidden",
          isMobileMenuOpen && "z-10 min-h-dvh opacity-100",
        )}
      >
        <NavList onNavigation={hideMobileMenu} className="flex md:hidden" />
      </nav>
    </>
  );
}
