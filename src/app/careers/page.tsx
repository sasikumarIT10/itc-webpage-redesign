import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { careersContent } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Careers | ITC Limited",
  description: careersContent.description,
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        label={careersContent.label}
        title={careersContent.title}
        description={careersContent.description}
        image="/images/leadership.jpg"
        cta={{ label: "View Open Roles", href: "#openings" }}
      />

      <section className="section-padding bg-itc-slate-light dark:bg-[#0a0f14]">
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeading align="center" label="Why ITC" title="Grow With Purpose" />
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {careersContent.perks.map((perk, i) => (
              <ScrollReveal key={perk} delay={i * 80}>
                <div className="card-premium flex items-center p-5 text-sm font-semibold text-itc-slate dark:text-white/85">
                  <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-itc-green text-xs font-black text-white">
                    ✓
                  </span>
                  {perk}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="section-padding bg-white dark:bg-[#141b24]">
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeading align="left" label="Open Positions" title="Current Opportunities" />
          </ScrollReveal>
          <div className="mt-10 space-y-4">
            {careersContent.openings.map((job, i) => (
              <ScrollReveal key={job.role} delay={i * 80}>
                <div className="card-premium flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-itc-slate dark:text-white">{job.role}</h3>
                    <p className="mt-1 text-sm text-itc-slate-muted dark:text-white/55">
                      {job.location} · {job.type}
                    </p>
                  </div>
                  <Link href="#" className="btn-outline shrink-0">
                    Apply now
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
