import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function InvestorStrip() {
  return (
    <section id="investors" className="relative overflow-hidden border-y border-itc-green/10 bg-white py-12 dark:border-white/10 dark:bg-[#0a0f14] lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-itc-green-muted/30 via-white to-itc-gold/5 dark:from-itc-green/10 dark:via-[#0a0f14] dark:to-itc-gold/5" />

      <div className="container-wide relative px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-itc-green/10 bg-white/80 p-8 shadow-card backdrop-blur-sm dark:border-white/10 dark:bg-[#141b24]/80 lg:flex-row lg:items-center lg:p-10">
            <div className="flex items-start gap-5">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-itc-green to-itc-green-dark shadow-glow sm:flex">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="section-label">Investor Relations</p>
                <h2 className="mt-4 font-display text-2xl font-bold text-itc-slate dark:text-white lg:text-3xl">
                  Financial Results — Q4 FY 2025-26
                </h2>
                <p className="mt-2 text-itc-slate-muted">
                  Quarterly results, media statements and investor presentations.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-wrap gap-3 lg:w-auto">
              <Link href="#" className="btn-outline flex-1 justify-center sm:flex-none">
                View Results
              </Link>
              <Link href="#" className="btn-outline flex-1 justify-center sm:flex-none">
                Presentation
              </Link>
              <Link href="#" className="btn-primary flex-1 justify-center sm:flex-none">
                IR Portal
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
