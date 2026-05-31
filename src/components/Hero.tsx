import Link from "next/link";
import { heroContent } from "@/data/site";
import { HeroVideoBackground } from "@/components/HeroVideoBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-itc-slate dark:bg-[#060a0e]">
      <HeroVideoBackground />
      <div className="noise-overlay" />

      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 animate-float rounded-full bg-itc-green-light/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 animate-float-delayed rounded-full bg-itc-gold/10 blur-3xl" />

      <div className="container-wide relative flex min-h-screen flex-col justify-center pb-32 pt-28 lg:pb-40 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="animate-fade-up">
              <p className="section-label-dark mb-6 border-itc-gold/30 bg-itc-gold/10">
                <span className="h-2 w-2 animate-pulse rounded-full bg-itc-gold" />
                {heroContent.eyebrow}
              </p>

              <h1 className="font-display text-balance text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Reimagining the <span className="gradient-text">Future</span>
                <br />
                with Purpose &amp; Progress
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 lg:text-xl">
                {heroContent.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={heroContent.primaryCta.href} className="btn-primary group">
                  {heroContent.primaryCta.label}
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href={heroContent.secondaryCta.href} className="btn-secondary">
                  {heroContent.secondaryCta.label}
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {heroContent.highlights.map((item, i) => (
                  <span
                    key={item}
                    className="animate-fade-up rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur-sm"
                    style={{ animationDelay: `${400 + i * 100}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {heroContent.spotlights.map((spot, i) => (
                <Link
                  key={spot.title}
                  href={spot.href}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 shadow-elevated backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:shadow-glow ${
                    i === 0 ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : ""
                  }`}
                >
                  {spot.image && (
                    <div className="absolute inset-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={spot.image} alt="" className="h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-55" />
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-br ${spot.gradient} opacity-85 transition-opacity group-hover:opacity-95`} />
                  <div className="noise-overlay opacity-[0.06]" />
                  <div className={`relative p-6 ${i === 0 ? "lg:p-8" : ""}`}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{spot.subtitle}</p>
                    <h2 className={`mt-2 font-display font-bold text-white ${i === 0 ? "text-2xl lg:text-3xl" : "text-lg"}`}>
                      {spot.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{spot.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-itc-gold-light group-hover:text-white">
                      Explore
                      <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="absolute -bottom-4 right-4 hidden animate-float rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl lg:block xl:right-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-itc-gold-light">Triple Bottom Line</p>
              <p className="mt-1 font-display text-xl font-bold text-white">People · Planet · Profit</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Scroll</span>
          <div className="h-10 w-6 rounded-full border border-white/20 p-1">
            <div className="h-2 w-full animate-bounce rounded-full bg-itc-gold/80" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-itc-slate-light to-transparent dark:from-[#0a0f14]" />
    </section>
  );
}
