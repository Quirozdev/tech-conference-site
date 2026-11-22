import type { Metadata } from "next";
import { Chakra_Petch, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/header/header";
import Footer from "@/shared/components/footer/footer";
import BookmarkHydration from "@/features/talks/components/bookmark-hydration";
import { SITE_URL } from "@/core/config/site";

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

const author = "Luis Daniel Quiroz Osuna";
const siteName = "DevHorizon 2026";

const description =
  "Discover DevHorizon 2026, a technology conference featuring developer-focused talks, expert speakers, and tracks covering frontend development, performance, accessibility, and tooling.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description,
  applicationName: siteName,
  authors: [
    {
      name: author,
      url: "https://github.com/Quirozdev",
    },
  ],
  creator: author,
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${chakraPetch.variable} antialiased`}
    >
      <body className="mx-auto flex min-h-screen max-w-360 flex-col bg-neutral-900 px-4 md:px-5 xl:px-10">
        <Header />
        <main className="flex flex-1 flex-col py-8 md:py-10 xl:pb-16">
          {children}
        </main>
        <Footer />
        <BookmarkHydration />
      </body>
    </html>
  );
}
