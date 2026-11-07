import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo.svg"
        width={192}
        height={31}
        alt="Dev Horizon Logo"
      />
    </Link>
  );
}
