"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Tasks", href: "/tasks" },
    { name: "Browse Freelancers", href: "/freelancers" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl shadow-sm">
      <header className="mx-auto flex h-16 items-center justify-between px-6">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" height={40} width={40} />

            <p className="font-bold italic text-xl">
              <span className="bg-gradient-to-r from-[#678d58] to-[#74d3ae] bg-clip-text text-transparent">
                Align
              </span>
              <span className="bg-gradient-to-r from-[#a6c48a] to-[#74d3ae] bg-clip-text text-transparent">
                Task
              </span>
            </p>
          </Link>
        </div>

        {/* CENTER NAV */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-[#dd9787]"
                    : "text-gray-600 group-hover:text-[#dd9787]"
                }`}
              >
                {link.name}
              </Link>

              {/* animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#dd9787] transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">

          <Link href="/login">
            <Button className="bg-gradient-to-r from-[#678d58] to-[#74d3ae] text-white font-medium px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
              Login
            </Button>
          </Link>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur-xl">
          <ul className="flex flex-col gap-3 p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    isActive(link.href)
                      ? "text-[#dd9787]"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-3 bg-gradient-to-r from-[#678d58] to-[#74d3ae] text-white rounded-full">
                Login
              </Button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;