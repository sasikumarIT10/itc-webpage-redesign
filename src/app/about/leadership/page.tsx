import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/ui/SubNav";
import { LeadershipSection } from "@/components/LeadershipSection";
import { leadershipQuotes, leadershipTeam } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const aboutNav = [
  { label: "Overview", href: "/about" },
  { label: "History", href: "/about/history" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Awards", href: "/about/awards" },
];

export const metadata = { title: "Leadership | ITC Limited" };

export default function LeadershipPage() {
  return (
    <>
      <PageHero label="About ITC" title="Leadership Speaks" description="Guiding ITC with vision, integrity and a commitment to sustainable growth." image="/images/leadership.jpg" />
      <SubNav items={aboutNav} />
      <LeadershipSection />
      <section className="section-padding bg-white dark:bg-[#0a0f14]">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-bold text-itc-slate dark:text-white">Management Team</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipTeam.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 80}>
                <div className="card-premium p-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-itc-green to-itc-green-dark text-xl font-black text-white">
                    {person.initials}
                  </div>
                  <h3 className="mt-4 font-bold text-itc-slate dark:text-white">{person.name}</h3>
                  <p className="mt-1 text-sm text-itc-slate-muted dark:text-white/55">{person.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {leadershipQuotes.map((q) => (
            <blockquote key={q.source} className="mt-12 rounded-2xl border border-itc-green/10 bg-itc-green-muted/30 p-8 dark:border-white/10 dark:bg-itc-green/10">
              <p className="font-display text-xl italic text-itc-slate dark:text-white">&ldquo;{q.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-itc-slate-muted dark:text-white/50">— {q.name}, {q.source}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
