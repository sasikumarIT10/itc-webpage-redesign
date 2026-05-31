"use client";

import Image from "next/image";
import { useState } from "react";
import { brandCategories, brands } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";

export default function BrandsClient() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? brands : brands.filter((b) => b.category === filter);

  return (
    <>
      <PageHero
        label="World of Brands"
        title="25+ Mother Brands, One House of ITC"
        description="From Sunfeast to Aashirvaad, Fiama to Classmate — brands that touch lives across India every day."
        image="/images/news-brands.jpg"
      />
      <section className="section-padding bg-white dark:bg-[#0a0f14]">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "World of Brands" }]} />
          <div className="mt-8 flex flex-wrap gap-2">
            {["All", ...brandCategories].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  filter === cat ? "bg-itc-green text-white" : "bg-itc-slate-light text-itc-slate-muted dark:bg-[#141b24] dark:text-white/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 40}>
                <article className="card-premium group overflow-hidden text-left">
                  <div className="relative aspect-square overflow-hidden bg-itc-slate-light dark:bg-[#1a222d]">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} product`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-itc-slate/70 via-transparent to-transparent opacity-80" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-itc-green dark:bg-[#141b24]/90 dark:text-itc-gold-light">
                      {brand.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="font-display text-xl font-bold text-itc-slate dark:text-white">{brand.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-itc-slate-muted dark:text-white/55">{brand.tagline}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        title="Powered by ITC FMCG"
        description="Explore the business behind India's favourite brands."
        primary={{ label: "FMCG Division", href: "/businesses/fmcg" }}
        secondary={{ label: "Latest News", href: "/media" }}
      />
    </>
  );
}
