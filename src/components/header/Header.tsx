import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "Courses", href: "/courses", active: false },
  { label: "Creators", href: "/creators", active: false },
];

const AUTH_LINKS = [
  { label: "Sign In", href: "/sign-in" },
  { label: "Join Us", href: "/join" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <Image
          src={"/icons/Header_Logo.svg"}
          alt="logo"
          height={37}
          width={171}
        />

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className="text-xs text-white/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          {AUTH_LINKS.map((link) => (
            <Link
              key={link.label}
              className="text-xs text-white/80"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            aria-label="Cart"
            className="text-white hover:opacity-80"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
