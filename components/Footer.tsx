import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-bright w-full border-t border-outline-variant/30 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-mobile-margin md:px-container-padding w-full max-w-[1440px] mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-manrope font-medium text-2xl text-primary mb-2">Mokhtar Ibrahim</span>
          <span className="font-hanken text-xs font-semibold tracking-widest text-primary/70 uppercase">
            © {new Date().getFullYear()} Real Estate Expert Egypt. Curated Excellence.
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/expertise", label: "Expertise" },
            { href: "/client-stories", label: "Client Stories" },
            { href: "/connect", label: "Connect" },
          ].map((link) => (
            <Link key={link.href} href={link.href}
              className="font-hanken text-xs font-semibold tracking-widest uppercase text-on-surface-variant hover:text-secondary transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/connect"
            className="glass-panel px-4 py-2 rounded-full font-hanken text-xs font-semibold text-primary hover:text-secondary transition-colors duration-300 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">chat</span>
            WhatsApp
          </Link>
          <Link href="/connect"
            className="glass-panel px-4 py-2 rounded-full font-hanken text-xs font-semibold text-primary hover:text-secondary transition-colors duration-300 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">work</span>
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
