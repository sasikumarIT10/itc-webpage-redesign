import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SustainabilitySection } from "@/components/SustainabilitySection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { sustainabilityPageContent, sustainabilityHighlights } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Sustainability | ITC Limited",
  description: sustainabilityPageContent.description,
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        label={sustainabilityPageContent.label}
        title={sustainabilityPageContent.title}
        description={sustainabilityPageContent.description}
        image="/images/sustainability.jpg"
        cta={{ label: "Download Report 2025", href: "#" }}
      />

      <section className="section-padding bg-itc-slate-light dark:bg-[#0a0f14]">
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeading align="center" label="Our Pillars" title="Triple Bottom Line in Action" />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {sustainabilityPageContent.pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="card-premium h-full p-7">
                  <h3 className="font-display text-xl font-bold text-itc-green dark:text-itc-green-bright">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-itc-slate-muted dark:text-white/60">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SustainabilitySection />

      <section className="section-padding bg-white dark:bg-[#141b24]">
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeading align="center" label="Performance" title="Sustainability Metrics" />
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sustainabilityHighlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="rounded-2xl border border-itc-green/10 bg-itc-green-muted/30 p-6 text-center dark:border-white/10 dark:bg-itc-green/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-itc-green">{item.title}</p>
                  <p className="mt-2 font-display text-3xl font-bold text-itc-slate dark:text-white">
                    {item.value}
                    <span className="text-lg text-itc-gold"> {item.unit}</span>
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/about" className="btn-outline inline-flex">
              Learn about ITC
            </Link>
          </div>
        </div>
      </section>

      <ResourcesSection />
    </>
  );
}
