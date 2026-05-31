"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function AnimatedStat({
  value,
  suffix,
  prefix,
}: {
  value: string;
  suffix: string;
  prefix?: string;
}) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numeric = parseInt(value.replace(/,/g, ""), 10);
          const duration = 1800;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(numeric * eased);
            setDisplay(current.toLocaleString("en-IN"));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix && (
        <span className="mr-0.5 text-lg font-semibold text-itc-slate-muted lg:text-xl">{prefix}</span>
      )}
      {display}
      <span className="ml-1 text-lg font-bold text-itc-gold lg:text-xl">{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  return (
    <section id="about" className="relative -mt-20 pb-20 pt-0 lg:-mt-28 lg:pb-28">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="overflow-hidden rounded-[2rem] border border-itc-green/10 bg-white p-8 shadow-elevated dark:border-white/10 dark:bg-[#141b24] lg:p-12">
            <SectionHeading
              align="center"
              label="ITC at a Glance"
              title="Building India's Future, Sustainably"
              description="Gross Revenue of ₹73,465 crores and EBITDA of ₹24,025 crores (as on 31.03.2025) with presence across FMCG, Packaging, Paperboards, Agri & IT."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 80}>
                  <div className="group relative overflow-hidden rounded-2xl border border-itc-green/10 bg-gradient-to-br from-itc-slate-light to-white p-6 transition-all duration-500 hover:border-itc-green/30 hover:shadow-glow dark:border-white/10 dark:from-[#1a222d] dark:to-[#141b24]">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-itc-green/5 transition-transform duration-500 group-hover:scale-150" />
                    <div className="relative">
                      <p className="text-3xl font-black text-itc-green lg:text-4xl">
                        <AnimatedStat
                          value={stat.value}
                          suffix={stat.suffix}
                          prefix={stat.prefix}
                        />
                      </p>
                      <p className="mt-3 text-sm font-semibold text-itc-slate-muted">{stat.label}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
