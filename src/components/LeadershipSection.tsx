import Image from "next/image";
import Link from "next/link";
import { leadershipQuotes } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function LeadershipSection() {
  const leader = leadershipQuotes[0];

  return (
    <section className="section-padding bg-white dark:bg-[#0a0f14]">
      <div className="container-wide">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2rem] shadow-elevated">
            <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-itc-green via-itc-gold to-itc-green-light" />

            <div className="grid lg:grid-cols-5">
              <div className="relative flex min-h-[320px] items-end overflow-hidden lg:col-span-2">
                <Image
                  src="/images/leadership.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-itc-green/90 via-itc-green-dark/80 to-itc-slate/70" />
                <div className="noise-overlay opacity-5" />

                <div className="relative w-full p-10 text-white">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 bg-white/15 text-3xl font-black backdrop-blur-sm lg:mx-0">
                    SP
                  </div>
                  <p className="mt-5 font-display text-2xl font-bold">{leader.name}</p>
                  <p className="mt-1 text-sm font-medium text-itc-gold-light">{leader.role}</p>
                </div>
              </div>

              <div className="relative flex flex-col justify-center bg-itc-slate-light p-8 dark:bg-[#141b24] lg:col-span-3 lg:p-14">
                <div className="absolute left-8 top-8 font-display text-8xl font-bold leading-none text-itc-green/10 lg:left-14 lg:top-10 lg:text-9xl">
                  &ldquo;
                </div>
                <p className="section-label relative">Leadership Speaks</p>
                <blockquote className="relative mt-6 font-display text-2xl font-medium leading-snug text-itc-slate dark:text-white lg:text-3xl xl:text-4xl">
                  {leader.quote}
                </blockquote>
                <p className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-itc-slate-muted dark:text-white/50">
                  <span className="h-px w-8 bg-itc-gold" />
                  {leader.source}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
