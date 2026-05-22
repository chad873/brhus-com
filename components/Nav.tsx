"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "The Firm" },
  { href: "/industrial", label: "Industrial" },
  { href: "/commercial", label: "Commercial" },
  { href: "/residential", label: "Residential" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="text-white font-serif font-bold text-lg tracking-wide leading-tight">
            Bird Rock Holdings
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 bg-[#1b4073] text-white text-sm px-5 py-2 hover:bg-[#163560] transition-colors font-medium"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-6 py-3 text-sm text-gray-300 hover:text-white border-b border-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link href="/contact" className="block text-center bg-[#1b4073] text-white text-sm px-5 py-3 font-medium" onClick={() => setOpen(false)}>
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
