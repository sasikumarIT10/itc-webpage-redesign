import type { ReactNode } from "react";
import Link from "next/link";
import { businesses } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const businessIcons: Record<string, ReactNode> = {
  fmcg: (
    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  agri: (
    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  paper: (
    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  packaging: (
    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  it: (
    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export function Businesses() {
  return (
    <section id="businesses" className="section-padding relative overflow-hidden bg-white dark:bg-[#0a0f14]">
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-itc-green-muted/50 blur-3xl" />

      <div className="container-wide relative">
        <ScrollReveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              align="left"
              label="Our Businesses"
              title="Diverse Portfolio, Unified Purpose"
              description="From everyday consumer brands to agri innovation and global IT services — ITC's businesses touch millions of lives across India and beyond."
            />
            <Link href="/businesses" className="btn-outline shrink-0">
              Explore all
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business, index) => (
            <ScrollReveal key={business.id} delay={index * 100}>
              <article
                className={`card-premium group flex h-full flex-col p-7 ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${business.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${business.iconBg} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {businessIcons[business.id]}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-itc-slate dark:text-white">{business.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-itc-slate-muted dark:text-white/60">
                    {business.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {business.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-itc-green/15 bg-itc-green-muted/50 px-3 py-1 text-xs font-bold text-itc-green"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
              <Link href={`/businesses/${business.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-itc-green transition-all group-hover:gap-3">
                    Know more
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-itc-green text-white transition-transform group-hover:scale-110">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
