"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between border-b border-neutral-600 py-3 md:py-5">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          width={192}
          height={31}
          alt="Dev Horizon Logo"
        />
      </Link>
      <NavBar />
    </header>
  );
}
