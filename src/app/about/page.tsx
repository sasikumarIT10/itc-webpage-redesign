import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/ui/SubNav";
import { StatsSection } from "@/components/StatsSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { aboutContent } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";

const aboutNav = [
  { label: "Overview", href: "/about" },
  { label: "History", href: "/about/history" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Awards", href: "/about/awards" },
];

export const metadata = { title: "About ITC | ITC Limited", description: aboutContent.description };

export default function AboutPage() {
  return (
    <>
      <PageHero label={aboutContent.label} title={aboutContent.title} description={aboutContent.description} image="/images/sustainability.jpg" />
      <SubNav items={aboutNav} />
      <StatsSection />
      <section className="section-padding bg-white dark:bg-[#0a0f14]">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal><SectionHeading align="left" label="Mission" title="Our Mission" description={aboutContent.mission} /></ScrollReveal>
            <ScrollReveal delay={100}><SectionHeading align="left" label="Vision" title="Our Vision" description={aboutContent.vision} /></ScrollReveal>
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="card-premium h-full p-6">
                  <h3 className="font-display text-xl font-bold text-itc-green dark:text-itc-green-bright">{v.title}</h3>
                  <p className="mt-3 text-sm text-itc-slate-muted dark:text-white/60">{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <LeadershipSection />
      <CtaBanner title="Discover Our Businesses" description="Five future-ready divisions powering ITC's growth." primary={{ label: "Our Businesses", href: "/businesses" }} secondary={{ label: "Sustainability", href: "/sustainability" }} />
    </>
  );
}
