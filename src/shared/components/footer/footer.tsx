import BackToTopButton from "@/shared/components/footer/back-to-top-button";
import Logo from "@/shared/components/logo";
import Link from "next/link";

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
              <Link href="/" className="text-preset-6 text-neutral-200">
                Home
              </Link>
              <Link href="/schedule" className="text-preset-6 text-neutral-200">
                Schedule
              </Link>
              <Link href="/speakers" className="text-preset-6 text-neutral-200">
                Speakers
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-preset-6 font-medium whitespace-nowrap text-green-200 uppercase">
              {"// Tracks "}
            </h3>
            <div className="flex flex-col gap-y-3">
              <Link href="#" className="text-preset-6 text-neutral-200">
                Frontend
              </Link>
              <Link href="#" className="text-preset-6 text-neutral-200">
                Performance
              </Link>
              <Link href="#" className="text-preset-6 text-neutral-200">
                Accesibility
              </Link>
              <Link href="#" className="text-preset-6 text-neutral-200">
                Tooling
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-preset-6 font-medium whitespace-nowrap text-green-200 uppercase">
              {"// Venue "}
            </h3>
            <div className="flex flex-col gap-y-3">
              <p className="text-preset-6 flex flex-col text-neutral-200">
                <span>Pier 70</span>
                <span>San Francisco, CA</span>
                <span>Nov 15–17, 2026</span>
              </p>
            </div>
          </div>
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
