import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Navigating Egypt's diverse luxury landscapes — North Coast, Cairo, New Capital, and Alexandria.",
};

const regions = [
  { name: "North Coast", icon: "water", description: "Exclusive beachfront estates and high-yield summer retreats in Sahel's most prestigious gated communities.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAibyfTfKhMYzWU2une9ibB7gxm4fgOqjXLvA9rT1P5VoTweDR93LjCVuJXUERDvuLXrO80BPgdfvkUEl9P4T9XvwAZtgEPN-cNmdyhiyay_v5JSo_fkuoD3HzouFsGNedFREUBrN95GYmrAeygLvyo5jZrxFsbuyOFWvJQm2d_0FHpxdRGcQoJW31dGMcEXmHhrdEMqec0YM7BHV6A8t8qRpZvcu8wtAz20oBPK3jFZIP0Cg8FXy99IRtG0rdbt_FFIaxeW60KMP6H", alt: "North Coast", colSpan: "" },
  { name: "Cairo", icon: "location_city", description: "Premium residential and commercial assets in West and East Cairo's established luxury districts.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnqFmm7OhCRnjv7YwXjct6P0ILpMqSm7z8PFJnvGqS8Ae7pfPYd1HB59JRfVZOUuOydIQ5pV2GXXVjmL1B_7Fy_EZWGIzCGnFVvLCKDhWVF9J87DPgVtOKfWOrTZ74J47PHmkyeCMt4TaJAmmrXjvEz3baLN26yIGBu6WNgzmUHzT0_vcSijd8KtKTs94wuQNMPUZRmJHud-g17E-DXl9rq2s1EbvFFidu4zxz_HqGKHsUvY93_Yxajw0nnWGym52uGIIC1x8SYUc_", alt: "Cairo", colSpan: "" },
  { name: "New Capital", icon: "domain", description: "Visionary investment opportunities in the heart of Egypt's futuristic administrative and financial hub.", image: "https://lh3.googleusercontent.com/aida/ADBb0uiA4dXDrH50mB0ZxykqgDzK-_hVSDFwL7OtoCYce0cFCfIkd-aKmJ5UUYct_e8Tl0w6USgaMlElVcJXbEvuewf4LoyOrxDOUryS2dTjaFH1ygYY-nLwW-6195r-SEVqjSYjI3hoUaMsd4CV8eFoDL6LWpzc3MjlSltAHhqlNaKgerLvEtsUbW1alB9ZetZu_-EaOUzMVFohjaMFJ6Bav3NvAtxM711MWM5jNALN-KGHpeqiaimMUhhok_SrkcXL0cqWcl2cqeNjVw", alt: "New Capital", colSpan: "md:col-span-2 lg:col-span-1" },
  { name: "Alexandria", icon: "holiday_village", description: "Heritage elegance meets modern luxury along the Mediterranean's most historic coastline.", image: "https://lh3.googleusercontent.com/aida/ADBb0uhsQ93rAk1vkpa77-2cjZuz8C13c-Exj57M0iRHjtE3tRnFsVuk9oQC7Z0mNnIHiPcUc7PeCb6tJfY4kwBs-Yq42jDlmDlU3TG0axah-YoBdqxucJLDf5RklwmtXMl4Sm7Q2JtziXO_y9EVEMtYqE5oPq_cwZWKiq2tu1H3n6Ct1GyEQrk1x5PqG2eQQLC2NMeqox0pGR9WW1m3hdRjoiva7Z9IxGzQEZ8w2b_4Ci0042XSm6XCv734nB1EhB466GOyiUEPPS7h_cU", alt: "Alexandria", colSpan: "" },
];

export default function ExpertisePage() {
  return (
    <>
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-surface-container-high/40 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-surface-container-highest/30 blur-[120px]" />
      </div>

      <Navbar />

      <main className="pt-32 pb-32 max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding">
        {/* Hero */}
        <section className="mb-24 md:mb-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[614px]">
            <div className="lg:col-span-7 z-10">
              <h1 className="font-manrope font-thin text-5xl sm:text-6xl lg:text-[64px] text-primary mb-6 leading-[1.1] tracking-[-0.02em]">
                Curating Egypt&apos;s <br />
                <span className="text-secondary italic font-light">Finest Properties</span>
              </h1>
              <p className="font-hanken text-[18px] leading-relaxed text-on-surface-variant max-w-2xl mb-10">
                With over 3 years of exclusive focus on Egypt&apos;s premier developments, I provide high-net-worth individuals with discreet, expert guidance across the nation&apos;s most coveted architectural landscapes. My approach marries deep market intelligence with an unwavering commitment to unparalleled service.
              </p>
              <div className="flex flex-wrap gap-4">
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
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfWYCjkLi3A19CNEIXDzt1CEX6PUg--mI-yoby-yjMpBXZLBLRb5ssR4uvGANC0KpVNVWps3wHRgkDR430Ahh9hDoWS6N-WQCH0tVhMP70wT5_hcd0xaWSteYsWQuzyrIm1mHdNGERMsxrlqCTc8f1dQFShirqqHdXFuYOTS2vCxkTfhHKBxw7_lkJ3YUCjTw_o4pRbqx3WYU8EeyNfd2VK5VGWHGDHPwaDjotW-280sJd52iDHuTmrsB9UlSbtffaRFjjKAXk9V0-"
                  alt="Modern luxury architecture" fill className="object-cover rounded-lg" unoptimized />
              </div>
              <div className="absolute -top-8 -right-8 w-full h-full bg-surface-container-high rounded-xl -z-10 mix-blend-multiply opacity-50" />
            </div>
          </div>
        </section>

        {/* Regional Grid */}
        <section>
          <div className="mb-12 md:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="font-manrope font-light text-[32px] md:text-[40px] text-primary mb-2 tracking-tight">Regional Expertise</h2>
              <p className="font-hanken text-[16px] leading-relaxed text-on-surface-variant">Navigating Egypt&apos;s diverse luxury landscapes.</p>
            </div>
            <Link href="/connect" className="hidden sm:inline-flex items-center font-hanken text-xs font-semibold text-secondary hover:underline underline-offset-4 whitespace-nowrap uppercase tracking-widest">
              View Full Portfolio
              <span className="material-symbols-outlined ml-1 text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {regions.map((region) => (
              <div key={region.name} className={`glass-card rounded-xl overflow-hidden group flex flex-col h-[400px] relative ${region.colSpan}`}>
                <Image src={region.image} alt={region.alt} fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 z-0" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/40 to-transparent z-10" />
                <div className="relative z-20 mt-auto p-glass-padding">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-manrope font-medium text-[24px] text-primary">{region.name}</h3>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface/50 backdrop-blur-md border border-white/50 text-secondary">
                      <span className="material-symbols-outlined text-[16px]">{region.icon}</span>
                    </span>
                  </div>
                  <p className="font-hanken text-[16px] leading-relaxed text-on-surface-variant mb-4">{region.description}</p>
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
