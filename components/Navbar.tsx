"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/expertise", label: "Expertise" },
  { href: "/client-stories", label: "Client Stories" },
  { href: "/connect", label: "Connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-500 hover:backdrop-blur-3xl">
      <div className="flex justify-between items-center px-mobile-margin md:px-container-padding h-20 w-full max-w-[1440px] mx-auto">
        {/* تم استعادة اسمك هنا */}
        <Link href="/" className="font-manrope font-medium text-2xl tracking-tighter text-primary">
          Mokhtar Ibrahim
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                className={`font-hanken text-[16px] transition-colors duration-300 ${
                  isActive ? "text-primary font-bold border-b-2 border-secondary pb-1"
                           : "text-on-surface-variant hover:text-secondary"}`}
              >{link.label}</Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/connect"
            className="bg-primary text-on-primary font-hanken px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105 inline-block text-xs font-semibold tracking-widest uppercase">
            Consult Now
          </Link>
        </div>

        <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-panel border-t border-white/20 px-mobile-margin py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`font-hanken text-[16px] transition-colors duration-300 py-2 ${
                pathname === link.href ? "text-primary font-bold border-b border-secondary pb-2"
                                      : "text-on-surface-variant hover:text-secondary"}`}
            >{link.label}</Link>
          ))}
          <Link href="/connect" onClick={() => setMobileOpen(false)}
            className="bg-primary text-on-primary font-hanken px-6 py-3 rounded-full text-center mt-2 transition-transform hover:scale-105 text-xs font-semibold uppercase tracking-widest">
            Consult Now
          </Link>
        </div>
      )}
    </nav>
  );
}