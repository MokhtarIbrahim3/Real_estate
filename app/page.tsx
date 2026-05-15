"use client";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ملاحظة: Metadata تُعرف عادةً في ملف layout أو page كـ Server Component، 
// إذا كان هذا الملف "use client" يفضل نقل الـ metadata لملف منفصل أو حذفها من هنا.

export default function HomePage() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <Image
          src="/images/bg-hero.png" 
          alt="Background" 
          fill 
          className="object-cover opacity-[0.03] blur-[15px] scale-105" 
          priority 
        />
      </div>

      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding min-h-[819px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center w-full">
            <div className="flex flex-col z-10 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl z-[-1]" />
              <span className="font-hanken text-xs font-semibold text-secondary tracking-widest uppercase mb-4 block">
                Exclusive Advisory
              </span>
              <h1 className="font-manrope font-thin text-5xl sm:text-6xl lg:text-[64px] text-primary mb-6 leading-[1.1] tracking-[-0.02em]">
                Curating Egypt's Most{" "}
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

            {/* Profile Image Section */}
            <div className="relative w-full mt-16 lg:mt-0 flex justify-center lg:justify-end">
              <div className="glass-panel tilt-card relative w-full max-w-md aspect-[3/4] rounded-xl p-4 flex flex-col items-center justify-center group overflow-hidden">
                <div className="absolute inset-2 border border-white/30 rounded-lg pointer-events-none transition-all duration-500 group-hover:inset-3 group-hover:border-secondary/30" />
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-surface-variant">
                  <Image
                    src="/images/mokhtar.jpg" // تم تحديث المسار ليكون باسمك
                    alt="Mokhtar Ibrahim"
                    fill
                    className="object-cover"
                    priority
                  />
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
            {/* Bento 1 - Coastal */}
            <Link href="/expertise" className="md:col-span-2 glass-panel rounded-xl overflow-hidden group tilt-card relative cursor-pointer block">
              <Image src="/images/coastal-villa.png" 
                alt="North Coast Villa" fill className="object-cover opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" />
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

            {/* Bento 2 - New Capital */}
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

            {/* Bento 4 - Cairo & Alex */}
            <Link href="/expertise" className="md:col-span-2 glass-panel rounded-xl overflow-hidden group tilt-card relative cursor-pointer block">
              <Image src="/images/cairo-skyline.png" 
                alt="Cairo Skyline" fill className="object-cover opacity-70 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-transparent" />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 p-glass-padding max-w-md">
                <h3 className="font-manrope font-medium text-[24px] text-primary mb-3">Cairo & Alexandria</h3>
                <p className="font-hanken text-[16px] leading-relaxed text-on-surface-variant mb-6">
                  From heritage properties to ultra-modern villas offering panoramic views across Egypt's urban centers.
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