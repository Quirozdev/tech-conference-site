import Image from "next/image";
import Button from "./_components/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-11.25">
      <section className="flex flex-col gap-y-6 xl:flex-row xl:gap-x-8">
        <article className="relative flex min-h-55 flex-col justify-between bg-neutral-100 p-4 md:max-h-[400px] md:min-h-90 md:px-6 md:py-5 xl:flex-1 xl:px-8">
          <h1 className="text-preset-1 font-chakra-petch text-neutral-900">
            where code meets the machine_
          </h1>
          <Image
            src="/images/bg-horizon-text.svg"
            width={554}
            height={128}
            alt=""
            className="absolute top-1/2 left-1/2 h-16 w-69.25 -translate-x-1/2 -translate-y-1/2 text-center md:h-32 md:w-138.5"
          />
          <div className="flex items-center justify-between border-t-2 border-neutral-900 pt-4">
            <p className="text-preset-6 text-neutral-900 uppercase">
              NOV 15-17, 2026
            </p>
            <p className="text-preset-6 text-neutral-900 uppercase">
              PIER 70, SF
            </p>
          </div>
        </article>
        <article className="overflow-hidden bg-cyan-100 px-4 py-5 md:flex md:max-h-[400px] md:gap-y-5 md:px-6 md:py-6 xl:min-w-137">
          <div className="flex flex-col gap-y-8 md:flex-1 md:justify-between">
            <div className="flex flex-col gap-y-4">
              <p className="text-preset-6 text-neutral-900">
                {"// FEATURED KEYNOTE"}
              </p>
              <div className="flex flex-col gap-y-2">
                <p className="text-preset-2 font-chakra-petch text-neutral-900">
                  elena vasquez
                </p>
                <p className="text-preset-6 flex flex-col font-medium text-neutral-600 uppercase">
                  <span>PRINCIPAL FRONTEND ENGINEER</span>
                  <span>@BYTECRAFT</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <p className="text-preset-5 font-bold text-neutral-900 uppercase">
                  THE NEXT FRONTIER OF WEB DEVELOPMENT
                </p>
                <p className="text-preset-6 font-medium text-neutral-600 uppercase">
                  NOV 15 / 9:00 / ROOM A
                </p>
              </div>
              <Button
                label="View Talk"
                variant="secondary"
                className="md:w-fit"
              />
            </div>
          </div>
          <div className="relative md:flex-1">
            <Image
              src="/images/avatar-elena-vasquez.webp"
              width={636}
              height={500}
              alt="Elena Vasquez's profile picture"
              className="absolute top-6 -left-12 z-10 hidden h-full min-w-120 md:block xl:-left-16"
            />
            <div className="absolute -top-14 -right-24 hidden h-46 w-46 rounded-full border-2 border-black/8 md:block xl:hidden"></div>
            <div className="absolute top-8 -right-8 hidden h-31 w-31 rounded-full border-2 border-black/8 md:block xl:hidden"></div>
          </div>
        </article>
      </section>
    </div>
  );
}
