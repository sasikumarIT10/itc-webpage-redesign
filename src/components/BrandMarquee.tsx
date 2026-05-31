import { brandNames } from "@/data/site";

export function BrandMarquee() {
  const items = [...brandNames, ...brandNames];

  return (
    <section className="relative overflow-hidden border-y border-itc-green/10 bg-white py-5 dark:border-white/10 dark:bg-[#0a0f14]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#0a0f14]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#0a0f14]" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="mx-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-itc-slate-muted/70 dark:text-white/40"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-itc-gold/60" />
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
