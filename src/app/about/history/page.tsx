import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/ui/SubNav";
import { aboutContent } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const aboutNav = [
  { label: "Overview", href: "/about" },
  { label: "History", href: "/about/history" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Awards", href: "/about/awards" },
];

export const metadata = { title: "History & Evolution | ITC Limited" };

export default function HistoryPage() {
  return (
    <>
      <PageHero label="About ITC" title="History & Evolution" description="Over a century of growth, diversification and enduring value creation." image="/images/hero-poster.jpg" />
      <SubNav items={aboutNav} />
      <section className="section-padding bg-itc-slate-light dark:bg-[#0a0f14]">
        <div className="container-wide">
          <ScrollReveal><SectionHeading align="center" label="Our Journey" title="Milestones That Shaped ITC" /></ScrollReveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-0">
            {aboutContent.milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 80}>
                <div className="relative flex gap-8 border-l-2 border-itc-green/20 pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-itc-gold" />
                  <div>
                    <span className="font-display text-2xl font-bold text-itc-green dark:text-itc-green-bright">{m.year}</span>
                    <p className="mt-2 text-itc-slate-muted dark:text-white/70">{m.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
