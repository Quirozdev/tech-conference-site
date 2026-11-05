import type { Metadata } from "next";
import { Chakra_Petch, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./_components/header";

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

export const metadata: Metadata = {
  title: "Tech Conference Site",
  description: "Site for tech conferences",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${chakraPetch.variable} antialiased`}
    >
      <body className="mx-auto flex min-h-screen max-w-360 flex-col bg-neutral-900 px-4 md:px-5 xl:px-10">
        <Header />
        <main className="py-8 md:py-10 xl:pb-16">{children}</main>
      </body>
    </html>
  );
}
