import Link from "next/link";
import { resources } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ResourcesSection() {
  return (
    <section id="careers" className="section-padding relative overflow-hidden bg-itc-slate-light dark:bg-[#0a0f14]">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-itc-green/5 blur-3xl" />

      <div className="container-wide relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal>
            <SectionHeading
              align="left"
              label="Latest Resources"
              title="Reports & Publications"
              description="Access annual reports, sustainability disclosures and ESG fact books."
            />
            <ul className="mt-8 space-y-3">
              {resources.map((resource, i) => (
                <li key={resource.title}>
                  <Link
                    href={resource.href}
                    className="group flex items-center gap-4 rounded-2xl border border-itc-green/10 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-itc-green/25 hover:shadow-card-hover dark:border-white/10 dark:bg-[#141b24]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-itc-green-muted text-sm font-black text-itc-green">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-semibold text-itc-slate transition-colors group-hover:text-itc-green dark:text-white/85 dark:group-hover:text-itc-green-bright">
                      {resource.title}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-itc-green text-white opacity-0 transition-all group-hover:opacity-100">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4 4m4-4V4" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[2rem] bg-gradient-to-br from-itc-green-dark via-itc-green to-itc-green-light p-8 text-white shadow-elevated lg:p-12">
              <div className="noise-overlay opacity-5" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-itc-gold/20 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

              <p className="section-label-dark relative border-white/20">Careers at ITC</p>
              <h2 className="relative mt-5 font-display text-3xl font-bold lg:text-4xl">
                Join a Future-Ready Organization
              </h2>
              <p className="relative mt-4 max-w-md leading-relaxed text-white/80">
                Build your career with one of India&apos;s most admired companies — where innovation,
                sustainability and excellence come together.
              </p>
              <Link
                href="/careers"
                className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-itc-green-dark shadow-elevated transition-all hover:scale-105 hover:bg-itc-gold-light"
              >
                Explore Careers
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
