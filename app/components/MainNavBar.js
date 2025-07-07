'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Poultry", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Tips", href: "/tips" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function MainNavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="w-full bg-[#00743F] text-white sticky top-0 z-30 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image width={500} height={500} src="/logo2.png" alt="Kibunja Farm Logo" className="w-10 h-10 mr-2 rounded-full" priority/>
        </Link>
        <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <ul className="hidden sm:flex gap-6 font-medium">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  (pathname === link.href
                    ? "text-yellow-300 font-semibold "
                    : "hover:text-yellow-200")
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="sm:hidden flex flex-col gap-2 px-4 pb-3 bg-[#00743F]">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  (pathname === link.href
                    ? "text-yellow-500 font-semibold "
                    : "block py-1 hover:underline underline-offset-4")
                }
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
} 