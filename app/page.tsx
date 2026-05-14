import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Home" };

export default function HomePage() {
  return (
    <>
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOxC9dZfgGZNR8S79g7vFKoRugReOF1WZ4IoGehFP62UluQg8yMbrfR0IGz1Gg60COfqM_mochmt9Ek-Q5Er4g47o4jFC-DFIu2JxYJyy--2CoVjHvDliYW38GSyQEuL61E2wCNr2pilOqhNY3oILs-56wkZe-5XcxsCsJKLHXOIsnY0PXn2RjP2IodFH-zK1F17g3elcsymWxNuz4P83t1XET-IKWcs4VI96SKC3i_IJA5MfAoHOLoc-OrnKj-tVHKjmkpeQckMWn"
          alt="Background" fill className="object-cover opacity-[0.15] blur-[40px] scale-110" priority unoptimized />
      </div>

      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding min-h-[819px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center w-full">
            <div className="flex flex-col z-10 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl z-[-1]" />
              <span className="font-hanken text-xs font-semibold text-secondary tracking-widest uppercase mb-4 block">
                Exclusive Advisory
              </span>
              <h1 className="font-manrope font-thin text-5xl sm:text-6xl lg:text-[64px] text-primary mb-6 leading-[1.1] tracking-[-0.02em]">
                Curating Egypt&apos;s Most{" "}
                <br className="hidden lg:block" />
                <span className="italic font-light">Exclusive Addresses</span>
              </h1>
              <p className="font-hanken text-[18px] leading-relaxed text-on-surface-variant mb-10 max-w-lg">
                Visionary real estate advisory for high-net-worth individuals.
                Discover unparalleled architectural mastery across the North Coast,
                Cairo, Alexandria and the New Capital.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/expertise"
                  className="bg-primary text-on-primary font-hanken text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-DEFAULT tilt-card flex items-center gap-2">
                  Explore Portfolio
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link href="/connect"
                  className="glass-panel text-primary font-hanken text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-DEFAULT tilt-card hover:bg-white/40">
                  Private Consultation
                </Link>
              </div>
            </div>

            <div className="relative w-full mt-16 lg:mt-0 flex justify-center lg:justify-end">
              <div className="glass-panel tilt-card relative w-full max-w-md aspect-[3/4] rounded-xl p-4 flex flex-col items-center justify-center group overflow-hidden">
                <div className="absolute inset-2 border border-white/30 rounded-lg pointer-events-none transition-all duration-500 group-hover:inset-3 group-hover:border-secondary/30" />
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-surface-variant">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALJWYDx1Aly2_8byp2WnysDw6TyZCrwLLi1ca5IK2RxfSduC6_Ppqa8iNSuLbcqRrIJw-RxTWOfpi7_APWgMgEouF2xUvRjEEm6E6leSzv4V5f38FMUd1_x0n_Csy2jDY2GRqyi-0ybC6eana2UfgXb5iQM9Bl0Ve75H8Ez7zX9_jZuyy4aYcMMll9rqpG_Ek9cBPTt-T8CBTkmoBI7B1e394jJxZ97dt3JwLdNVu-aFP-wxNCMJLwZizmMrs8-5P_nBQQHDXIgHbo"
                    alt="Mokhtar Ibrahim" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                </div>
                <div className="absolute bottom-10 left-10 glass-panel px-6 py-3 rounded-full flex items-center gap-3 shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-hanken text-xs font-semibold tracking-widest text-primary">Mokhtar Ibrahim</span>
                </div>
              </div>
              <div className="absolute top-1/4 -right-8 w-24 h-24 glass-panel rounded-full blur-sm z-[-1] animate-pulse" />
              <div className="absolute -bottom-8 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl z-[-1]" />
            </div>
          </div>
        </section>

        <div className="h-24 md:h-32" />

        {/* Bento Grid */}
        <section className="max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding">
          <div className="mb-12">
            <h2 className="font-manrope font-light text-[32px] md:text-[40px] text-primary mb-2 tracking-tight">
              Curated Realms
            </h2>
            <p className="font-hanken text-[16px] leading-relaxed text-on-surface-variant max-w-2xl">
              Access to off-market masterpieces and iconic architectural developments tailored for the discerning investor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Bento 1 */}
            <Link href="/expertise" className="md:col-span-2 glass-panel rounded-xl overflow-hidden group tilt-card relative cursor-pointer block">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2GQDShmrg6oZNOAPhq4bHcLJtjxJkc4aucc1vhg0BoRR1mDkrcLFRxg_vDU_0dOez0ubZmZj5w0dGjXxoEd1Q9SfuExSr6pK_a0aMoRY5q25gECO_3NODrHD1QmB_9Maa6KQOQg9Wl-99k15JacleTSdzZrZSwuMt5fzTs1b5VG_imiurMCJMRCTrzL1NWFguTeGOf3bCffVzJSYE4SGlNRWOPBwYaFW-3n-fZHBuXokFjpNrAweGm9uBCSdMV7b4I57DGxjmGzTQ"
                alt="North Coast Villa" fill className="object-cover opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-glass-padding">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full font-hanken text-xs font-semibold text-white mb-3 border border-white/30 uppercase tracking-widest">
                  Coastal Masterpieces
                </span>
                <h3 className="font-manrope font-medium text-[24px] text-white">
                  The North Coast<br />Ain Sokhna<br />Sharm El Sheikh
                </h3>
              </div>
            </Link>

            {/* Bento 2 */}
            <Link href="/expertise" className="glass-panel rounded-xl p-glass-padding flex flex-col justify-between tilt-card cursor-pointer group block">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <span className="material-symbols-outlined text-secondary">domain</span>
              </div>
              <div>
                <h3 className="font-manrope font-medium text-[24px] text-primary mb-2">New Capital</h3>
                <p className="font-hanken text-[16px] leading-relaxed text-on-surface-variant">
                  Investment-grade commercial and residential landmarks shaping the future skyline.
                </p>
              </div>
            </Link>

            {/* Bento 3 – Stats */}
            <div className="glass-panel rounded-xl p-glass-padding flex flex-col items-center justify-center text-center tilt-card">
              <span className="font-manrope font-thin text-[clamp(48px,8vw,64px)] text-primary leading-none mb-2 tracking-[-0.02em]">3+</span>
              <span className="font-hanken text-xs font-semibold text-secondary tracking-widest uppercase">Years of Insight</span>
              <div className="w-12 h-[1px] bg-outline-variant/50 my-4" />
              <p className="font-hanken text-[16px] leading-relaxed text-on-surface-variant">
                Unrivaled market intelligence ensuring secure, legacy-building acquisitions.
              </p>
            </div>

            {/* Bento 4 */}
            <Link href="/expertise" className="md:col-span-2 glass-panel rounded-xl overflow-hidden group tilt-card relative cursor-pointer block">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtSKfPigXuUYwEeG9t_LfehH1E-7E-lJXMCHI-kO4r1UrevIGrc8j9T3Cb_3r5hmo82_DBsQjz9mlPCQC902lXs7ksNwNN2_5h6Kat_qDmNB4XjEqbaeNZkTqJhbHLuoglFwk5Mh7NeHlCYDqMtQkJANHMGEut9I2xfWcibyrW0fBUUtDqkrlZ30SZYaHbUTy66hiNKJGOQI0qOHNXrEYQnGL6pw-mmFfsIw_URs0egCqG2DMRdF3mG6wrnso09eXr4WUwQ79zmT9j"
                alt="Cairo Skyline" fill className="object-cover opacity-70 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-transparent" />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 p-glass-padding max-w-md">
                <h3 className="font-manrope font-medium text-[24px] text-primary mb-3">Cairo &amp; Alexandria</h3>
                <p className="font-hanken text-[16px] leading-relaxed text-on-surface-variant mb-6">
                  From famous heritage properties to ultra-modern villas offering panoramic views of the most luxurious locations in Cairo and Alexandria.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
