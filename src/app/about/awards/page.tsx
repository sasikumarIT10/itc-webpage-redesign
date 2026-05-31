import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/ui/SubNav";
import { awardsList } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const aboutNav = [
  { label: "Overview", href: "/about" },
  { label: "History", href: "/about/history" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Awards", href: "/about/awards" },
];

export const metadata = { title: "Awards & Recognition | ITC Limited" };

export default function AwardsPage() {
  return (
    <>
      <PageHero label="About ITC" title="Awards & Accolades" description="Recognition for excellence in sustainability, supply chain, people practices and brand building." image="/images/sustainability.jpg" />
      <SubNav items={aboutNav} />
      <section className="section-padding bg-itc-slate-light dark:bg-[#0a0f14]">
        <div className="container-wide">
          <div className="grid gap-5 md:grid-cols-2">
            {awardsList.map((award, i) => (
              <ScrollReveal key={award.title} delay={i * 60}>
                <div className="card-premium p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-itc-gold">{award.org}</span>
                  <h2 className="mt-2 font-display text-xl font-bold text-itc-slate dark:text-white">{award.title}</h2>
                  <p className="mt-2 text-sm text-itc-slate-muted dark:text-white/55">{award.category}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
