import Link from "next/link";

interface Props {
  href: string;
  label: string;
}

export default function FooterLink({ href, label }: Props) {
  return (
    <Link href={href} className="text-preset-6 text-neutral-200">
      {label}
    </Link>
  );
}
