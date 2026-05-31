import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { resources, sustainabilityHighlights } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata = { title: "Sustainability Reports | ITC Limited" };

export default function SustainabilityReportsPage() {
  return (
    <>
      <PageHero label="Sustainability" title="Reports & Publications" description="Annual sustainability reports, ESG fact books and nature-related disclosures." image="/images/sustainability.jpg" />
      <section className="section-padding bg-white dark:bg-[#0a0f14]">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Sustainability", href: "/sustainability" }, { label: "Reports" }]} />
          <ul className="mt-10 space-y-4">
            {resources.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 60}>
                <li className="card-premium flex items-center justify-between gap-4 p-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-itc-gold">PDF · 2025</span>
                    <h2 className="mt-1 font-bold text-itc-slate dark:text-white">{r.title}</h2>
                  </div>
                  <span className="btn-outline shrink-0 cursor-default opacity-80">Download</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sustainabilityHighlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-itc-green/10 bg-itc-green-muted/30 p-5 text-center dark:border-white/10 dark:bg-itc-green/10">
                <p className="text-xs font-bold uppercase text-itc-green">{h.title}</p>
                <p className="mt-2 font-display text-2xl font-bold text-itc-slate dark:text-white">{h.value} {h.unit}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/sustainability" className="font-bold text-itc-green dark:text-itc-green-bright">← Back to Sustainability</Link>
          </p>
        </div>
      </section>
    </>
  );
}
