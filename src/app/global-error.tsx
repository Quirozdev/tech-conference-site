"use client";

import Header from "@/shared/components/header/header";
import { Chakra_Petch, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Button from "@/shared/components/button";
import { ErrorIcon } from "@/shared/icons/error-icon";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["800", "700", "500", "400"],
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  weight: ["700", "600"],
  subsets: ["latin"],
});

export default function GlobalError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${chakraPetch.variable} antialiased`}
    >
      <body className="mx-auto flex min-h-screen max-w-360 flex-col bg-neutral-900 px-4 md:px-5 xl:px-10">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center gap-y-4 py-8 md:py-10 xl:pb-16">
          <ErrorIcon className="size-32 text-neutral-100" />
          <h2 className="text-preset-2 text-center text-neutral-100">
            Something went terribly wrong
          </h2>
          <Button
            label="Try again"
            as="button"
            variant="primary"
            onClick={retry}
          />
        </main>
      </body>
    </html>
  );
}
