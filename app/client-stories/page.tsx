import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Client Stories",
  description: "Testimonials from discerning clients who trusted Mokhtar Ibrahim for Egypt's finest real estate.",
};

const testimonials = [
  { id: 1, quote: "شهادة حق، مختار كان امين معايا الصراحة انا اتعاملت مع brokers كتير كانو عايزين يبيع و وخلاص بس هو الصراحة كان بيختارلي المناسب ليا بغض النظر عن العمولة وكدا", name: "Karim Al-Sayed", property: null, featured: true },
  { id: 2, quote: "بصراحة مختار اشتغل معايا بضمير. فيلا الساحل اللي رشحهالي رجعتلي ROI حلو اوي الحمدلله انا مكنتش عامل حسابي عليها ساعتها هو اللي اقنعني بيها اصلا", name: "Layla Mansour", property: "North Coast Chalet", featured: false },
  { id: 3, quote: "مختار ساعدني جداً اول مرجعت من لندن كنت تايه ومش عارف الدنيا فالسوق عاملة ازاي وكان هيتنصب عليا كتير بس حد رشحلي مختار وقالي انه واثق فيه وفعلا جابلي حاجة احسن من اللي كنت عايزها وبسعر اقل كمان", name: "Tariq Hassan", property: "Zamalek Penthouse", featured: false },
  { id: 4, quote: "أكتر حاجة عجبتني في التعامل مع مختار هي الأمانة. الحقيقة مكنش عايز يبيع لي وخلاص، بالعكس، وجهني صح وخلاني أصرف نظر عن وحدات تانية كنت فاكرها كويسة بس هو وضح لي عيوبها وجابلي حاجة احسن وبسعر اقل كمان", name: "The Youssef Family", property: "Alexandria Estate", featured: true },
];

export default function ClientStoriesPage() {
  return (
    <>
      <div className="fixed w-[600px] h-[600px] rounded-full top-[-100px] left-[-200px] z-[-1] pointer-events-none" style={{ background: "rgba(203,219,245,0.6)", filter: "blur(120px)" }} />
      <div className="fixed w-[800px] h-[800px] rounded-full top-[40%] right-[-300px] z-[-1] pointer-events-none" style={{ background: "rgba(255,222,165,0.24)", filter: "blur(120px)" }} />
      <div className="fixed w-[500px] h-[500px] rounded-full bottom-[-100px] left-[20%] z-[-1] pointer-events-none" style={{ background: "rgba(211,228,254,0.6)", filter: "blur(120px)" }} />

      <Navbar />

      <main className="pt-32 pb-32">
        <header className="px-mobile-margin md:px-container-padding max-w-[1440px] mx-auto text-center mb-16 md:mb-24 relative z-10">
          <h1 className="hidden md:block font-manrope font-thin text-[64px] text-primary mb-6 leading-[1.1] tracking-[-0.02em]">
            Curated Excellence
          </h1>
          <h1 className="md:hidden font-manrope font-light text-[32px] text-primary mb-6 leading-[1.2]">
            Curated Excellence
          </h1>
          <p className="font-hanken text-[18px] leading-relaxed text-on-surface-variant max-w-2xl mx-auto">
            Discover the architectural masterpieces and serene environments we&apos;ve secured for our discerning clientele across Egypt&apos;s most exclusive landscapes.
          </p>
        </header>

        <section className="px-mobile-margin md:px-container-padding max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {testimonials.map((t) => (
              <article key={t.id} className={`glass-card rounded-xl p-glass-padding flex flex-col justify-between min-h-[300px] ${t.featured ? "lg:col-span-2" : ""}`}>
                <div className="mb-8">
                  <span className={`material-symbols-outlined mb-4 ${t.featured ? "text-secondary text-4xl" : "text-outline-variant text-3xl"}`}
                    style={{ fontVariationSettings: '"FILL" 1' }}>format_quote</span>
                  <p className={`text-on-surface leading-relaxed ${t.featured ? "font-manrope font-medium text-[24px]" : "font-hanken text-[18px]"}`}
                    dir="rtl" lang="ar">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`rounded-full overflow-hidden border border-white/50 bg-surface-container flex items-center justify-center shrink-0 ${t.featured ? "w-12 h-12" : "w-10 h-10"}`}>
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">person</span>
                  </div>
                  <div>
                    <h3 className="font-hanken text-xs font-semibold text-primary uppercase tracking-widest">{t.name}</h3>
                    {t.property && <p className="font-hanken text-[14px] text-on-surface-variant">{t.property}</p>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
