import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { InvestorStrip } from "@/components/InvestorStrip";
import { investorsContent } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = {
  title: "Investor Relations | ITC Limited",
  description: investorsContent.description,
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero label={investorsContent.label} title={investorsContent.title} description={investorsContent.description} image="/images/hero-poster.jpg" />
      <section className="section-padding bg-itc-slate-light dark:bg-[#0a0f14]">
        <div className="container-wide">
          <ScrollReveal><SectionHeading align="center" label="Key Figures" title="Financial Highlights" /></ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {investorsContent.highlights.map((h, i) => (
              <ScrollReveal key={h.label} delay={i * 80}>
                <div className="card-premium p-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-itc-slate-muted dark:text-white/50">{h.label}</p>
                  <p className="mt-3 font-display text-2xl font-bold text-itc-green dark:text-itc-green-bright">{h.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <InvestorStrip />
      <section id="stock" className="section-padding bg-white dark:bg-[#141b24]">
        <div className="container-wide">
          <ScrollReveal><SectionHeading align="left" label="Stock Information" title="Listed on NSE & BSE" /></ScrollReveal>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="card-premium p-5"><dt className="text-xs font-bold uppercase text-itc-slate-muted">NSE Symbol</dt><dd className="mt-2 text-xl font-bold text-itc-slate dark:text-white">{investorsContent.stockInfo.nse}</dd></div>
            <div className="card-premium p-5"><dt className="text-xs font-bold uppercase text-itc-slate-muted">BSE Code</dt><dd className="mt-2 text-xl font-bold text-itc-slate dark:text-white">{investorsContent.stockInfo.bse}</dd></div>
            <div className="card-premium p-5"><dt className="text-xs font-bold uppercase text-itc-slate-muted">ISIN</dt><dd className="mt-2 text-lg font-bold text-itc-slate dark:text-white">{investorsContent.stockInfo.isin}</dd></div>
          </dl>
        </div>
      </section>
      <section id="shareholder" className="section-padding bg-itc-slate-light dark:bg-[#0a0f14]">
        <div className="container-wide">
          <ScrollReveal><SectionHeading align="left" label="Downloads" title="Reports & Disclosures" /></ScrollReveal>
          <ul className="mt-8 space-y-3">
            {investorsContent.documents.map((doc, i) => (
              <ScrollReveal key={doc.title} delay={i * 60}>
                <li className="card-premium flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-itc-gold">{doc.type}</span>
                    <p className="font-semibold text-itc-slate dark:text-white">{doc.title}</p>
                  </div>
                  <time className="text-sm text-itc-slate-muted">{doc.date}</time>
                </li>
              </ScrollReveal>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/sustainability/reports" className="font-bold text-itc-green dark:text-itc-green-bright">Sustainability reports →</Link>
          </p>
        </div>
      </section>
      <CtaBanner title="Questions for Investor Relations?" description="Reach out to ITC Limited for shareholder queries." primary={{ label: "Contact Us", href: "/contact" }} />
    </>
  );
}
