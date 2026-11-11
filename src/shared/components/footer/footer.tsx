import BackToTopButton from "@/shared/components/footer/back-to-top-button";
import Logo from "@/shared/components/logo";
import { NAV_LINKS } from "@/core/config/navigation.config";
import FooterLink from "@/shared/components/footer/footer-link";
import FooterVenue from "@/shared/components/footer/footer-venue";
import { Suspense } from "react";
import FooterLinksSkeleton from "@/shared/components/footer/footer-links-skeleton";
import FooterTracks from "@/shared/components/footer/footer-tracks";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-8 border-t border-neutral-600 pt-8 md:gap-y-10 md:pt-10">
      <div className="flex flex-col gap-5 md:gap-8 xl:flex-row xl:justify-between">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p className="text-preset-6 text-neutral-200">
            A three-day conference for engineers who build the interfaces humans
            use every day.
          </p>
        </div>
        <div className="flex flex-col gap-y-8 md:flex-row md:justify-between xl:gap-x-20">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-preset-6 font-medium whitespace-nowrap text-green-200 uppercase">
              {"// Navigate"}
            </h3>
            <div className="flex flex-col gap-y-3">
              {NAV_LINKS.map((navLink) => {
                return (
                  <FooterLink
                    key={navLink.href}
                    href={navLink.href}
                    label={navLink.label}
                  />
                );
              })}
            </div>
          </div>
          <Suspense
            fallback={
              <FooterLinksSkeleton title="// Tracks" skeletonsCount={4} />
            }
          >
            <FooterTracks />
          </Suspense>
          <Suspense
            fallback={
              <FooterLinksSkeleton title="// Venue" skeletonsCount={3} />
            }
          >
            <FooterVenue />
          </Suspense>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 border-t border-neutral-600 py-5 md:flex-row md:items-center md:justify-between md:py-6">
        <p className="text-preset-7 text-neutral-200">
          © 2026 DEVHORIZON. ALL RIGHTS RESERVED.
        </p>
        <BackToTopButton />
      </div>
    </footer>
  );
}
