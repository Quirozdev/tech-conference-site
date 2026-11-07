import NavBar from "./nav-bar";
import Logo from "@/app/_components/logo";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between border-b border-neutral-600 py-3 md:py-5">
      <Logo />
      <NavBar />
    </header>
  );
}
