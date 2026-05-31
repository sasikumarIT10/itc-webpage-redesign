"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { newsArticles } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = ["All", "Brands", "Leadership", "Awards", "Financial"];

export function NewsSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? newsArticles : newsArticles.filter((item) => item.category === active);
  const featured = filtered.find((item) => item.featured) ?? filtered[0];
  const rest = filtered.filter((item) => item !== featured);

  return (
    <section id="news" className="section-padding relative bg-itc-slate-light dark:bg-[#0a0f14]">
      <div className="container-wide relative">
        <ScrollReveal>
          <SectionHeading align="center" label="Latest Updates" title="News & Stories" description="Stay informed with the latest from ITC." />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button key={cat} type="button" onClick={() => setActive(cat)} className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${active === cat ? "scale-105 bg-itc-green text-white shadow-glow" : "bg-white text-itc-slate-muted shadow-card hover:text-itc-green dark:bg-[#141b24] dark:text-white/60"}`}>
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featured && (
            <ScrollReveal delay={150} className="lg:row-span-2">
              <Link href={`/media/${featured.slug}`} className="card-premium group flex h-full flex-col overflow-hidden">
                <div className="relative h-56 lg:h-72">
                  <Image src={featured.image} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} mix-blend-multiply opacity-70`} />
                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase text-white backdrop-blur-sm">{featured.category}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <time className="text-xs font-semibold text-itc-gold">{featured.date}</time>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-itc-slate group-hover:text-itc-green dark:text-white lg:text-3xl">{featured.title}</h3>
                  <p className="mt-4 flex-1 text-itc-slate-muted dark:text-white/60">{featured.excerpt}</p>
                  <span className="mt-6 font-bold text-itc-green dark:text-itc-green-bright">Read full story →</span>
                </div>
              </Link>
            </ScrollReveal>
          )}

          <div className="flex flex-col gap-5">
            {rest.map((item, i) => (
              <ScrollReveal key={item.slug} delay={200 + i * 80}>
                <Link href={`/media/${item.slug}`} className="card-premium group flex overflow-hidden">
                  <div className="relative w-28 shrink-0 sm:w-40">
                    <Image src={item.image} alt="" fill className="object-cover group-hover:scale-110" sizes="160px" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} mix-blend-multiply opacity-60`} />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-itc-green">{item.category}</span>
                    <h3 className="mt-2 text-base font-bold leading-snug text-itc-slate group-hover:text-itc-green dark:text-white">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-itc-slate-muted dark:text-white/55">{item.excerpt}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
