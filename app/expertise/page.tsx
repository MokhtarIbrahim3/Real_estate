import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Expertise | Luxury Real Estate Egypt",
  description: "Navigating Egypt's diverse luxury landscapes — North Coast, Cairo, New Capital, and Alexandria.",
};

const regions = [
  { 
    name: "North Coast", 
    icon: "water", 
    description: "Exclusive beachfront estates and high-yield summer retreats in Sahel's most prestigious gated communities.", 
    image: "/images/northcoast.png", 
    alt: "North Coast", 
    colSpan: "" 
  },
  { 
    name: "Cairo", 
    icon: "location_city", 
    description: "Premium residential and commercial assets in West and East Cairo's established luxury districts.", 
    image: "/images/cairo.png", 
    alt: "Cairo", 
    colSpan: "" 
  },
  { 
    name: "New Capital", 
    icon: "domain", 
    description: "Visionary investment opportunities in the heart of Egypt's futuristic administrative and financial hub.", 
    image: "/images/newcapital.png", 
    alt: "New Capital", 
    colSpan: "" 
  },
  { 
    name: "Alexandria", 
    icon: "holiday_village", 
    description: "Mediterranean elegance and historic charm meets modern luxury living in Egypt's second capital.", 
    image: "/images/alexandria.png", 
    alt: "Alexandria", 
    colSpan: "" 
  },
];

export default function ExpertisePage() {
  return (
    <>
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-surface-container-high/40 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-surface-container-highest/30 blur-[120px]" />
      </div>

      <Navbar />

      <main className="pt-32 pb-32 max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding">
        
        {/* Hero Section */}
        <section className="mb-24 md:mb-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[614px]">
            <div className="lg:col-span-7 z-10 text-center lg:text-left">
              <h1 className="font-manrope font-thin text-5xl sm:text-6xl lg:text-[64px] text-primary mb-6 leading-[1.1] tracking-[-0.02em]">
                Curating Egypt&apos;s <br />
                <span className="text-secondary italic font-light">Finest Properties</span>
              </h1>
              <p className="font-hanken text-[18px] leading-relaxed text-on-surface-variant max-w-2xl mb-10 mx-auto lg:mx-0">
                With over 3 years of exclusive focus on Egypt&apos;s premier developments, I provide high-net-worth individuals with discreet, expert guidance across the nation&apos;s most coveted architectural landscapes.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {[{ icon: "verified", label: "Licensed Expert" }, { icon: "public", label: "Nationwide Portfolio" }].map(({ icon, label }) => (
                  <span key={label} className="inline-flex items-center px-4 py-2 bg-surface-container rounded-full font-hanken text-xs font-semibold text-primary glass-panel transition-all duration-300 tracking-widest uppercase">
                    <span className="material-symbols-outlined mr-2 text-[18px]">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="glass-panel rounded-xl overflow-hidden p-2 aspect-[4/5] relative z-10 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
                <Image 
                  src="/images/model-villa.png"
                  alt="Modern luxury architecture" 
                  fill 
                  className="object-cover rounded-lg" 
                  unoptimized 
                />
              </div>
              <div className="absolute -top-8 -right-8 w-full h-full bg-surface-container-high rounded-xl -z-10 mix-blend-multiply opacity-50" />
            </div>
          </div>
        </section>

        {/* Regional Grid */}
        <section>
          <div className="mb-12 md:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-white/10 pb-8">
            <div>
              <h2 className="font-manrope font-light text-[32px] md:text-[40px] text-primary mb-2 tracking-tight">Regional Expertise</h2>
              <p className="font-hanken text-[16px] leading-relaxed text-on-surface-variant">Navigating Egypt&apos;s diverse luxury landscapes.</p>
            </div>
            <Link href="/connect" className="inline-flex items-center font-hanken text-xs font-semibold text-secondary hover:underline underline-offset-4 whitespace-nowrap uppercase tracking-widest">
              View Full Portfolio
              <span className="material-symbols-outlined ml-1 text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {regions.map((region) => (
              <div key={region.name} className={`glass-card rounded-xl overflow-hidden group flex flex-col h-[450px] relative transition-all duration-500 hover:shadow-xl ${region.colSpan}`}>
                <Image 
                  src={region.image} 
                  alt={region.alt} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 z-0" 
                  unoptimized 
                />
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent z-10" />
                
                <div className="relative z-20 mt-auto p-glass-padding">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-manrope font-medium text-[28px] text-primary">{region.name}</h3>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface/50 backdrop-blur-md border border-white/20 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined text-[20px]">{region.icon}</span>
                    </span>
                  </div>
                  <p className="font-hanken text-[16px] leading-relaxed text-on-surface-variant mb-4 line-clamp-3">
                    {region.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}