"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold text-cyan-400 tracking-wide hover:text-cyan-300 transition"
          >
            SV InfoTech
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`${
                    isActive
                      ? "text-cyan-400 font-semibold text-lg border-b-2 border-cyan-400"
                      : "text-gray-300 text-lg"
                  } hover:text-white transition`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-4 animate-slide-down">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`block ${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-gray-300"
                } hover:text-white transition`}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
