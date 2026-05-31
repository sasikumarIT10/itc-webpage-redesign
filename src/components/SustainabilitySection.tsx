import Image from "next/image";
import Link from "next/link";
import { sustainabilityHighlights } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="relative overflow-hidden section-padding bg-itc-green-dark text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/sustainability.jpg"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-itc-green-dark/85" />
      <div className="absolute inset-0 bg-mesh-green opacity-50" />
      <div className="noise-overlay opacity-[0.04]" />

      <div className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/5" />

      <div className="container-wide relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <SectionHeading
              align="left"
              dark
              label="Sustainability at ITC"
              title="Shaping the Future — Purpose. Progress. Partnerships."
              description="ITC's sustainability vision integrates economic growth with environmental stewardship and social inclusion — creating enduring value for all stakeholders."
            />
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-itc-gold to-itc-gold-light px-7 py-3.5 text-sm font-bold text-itc-green-dark shadow-glow-gold transition-all hover:scale-105"
              >
                Sustainability Report 2025
              </Link>
              <Link href="#" className="btn-secondary">
                Nature Report 2025
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {sustainabilityHighlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:border-itc-gold/30 hover:bg-white/10 hover:shadow-glow">
                  <p className="relative text-[10px] font-bold uppercase tracking-[0.15em] text-itc-gold-light">
                    {item.title}
                  </p>
                  <div className="relative mt-3 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold">{item.value}</span>
                    <span className="text-sm font-semibold text-white/60">{item.unit}</span>
                  </div>
                  <p className="relative mt-3 text-xs leading-relaxed text-white/60">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
