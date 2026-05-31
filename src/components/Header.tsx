"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { megaMenu } from "@/data/site";
import { ItcLogo } from "@/components/ItcLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SiteSearch } from "@/components/SiteSearch";
import { MegaMenu } from "@/components/MegaMenu";
import { useAppTheme } from "@/components/ThemeProvider";

const flatMobileLinks = megaMenu.flatMap((section) => [
  { type: "header" as const, label: section.title, href: section.href },
  ...section.links.map((l) => ({ type: "link" as const, label: l.label, href: l.href })),
]);

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const { resolved, mounted } = useAppTheme();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(null);
  }, [pathname]);

  const onHero = isHome && !scrolled;
  const lightNav = onHero && !(mounted && resolved === "dark");

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || !isHome ? "border-b border-itc-green/10 bg-white/90 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0f14]/90" : "bg-transparent"}`}>
      <div className="container-wide flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <ItcLogo light={lightNav} showText />
        <MegaMenu light={lightNav} openSection={megaOpen} onOpen={setMegaOpen} />
        <div className="hidden items-center gap-2 lg:flex">
          <SiteSearch light={lightNav} />
          <ThemeToggle compact />
          <Link href="/contact" className={`hidden px-2 text-sm font-semibold xl:inline ${lightNav ? "text-white/85 hover:text-white" : "text-itc-slate-muted hover:text-itc-green dark:text-white/70"}`}>Contact</Link>
          <Link href="/investors" className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all hover:scale-105 ${lightNav ? "bg-white text-itc-green-dark shadow-elevated" : "bg-itc-green text-white shadow-glow dark:bg-itc-gold dark:text-itc-green-dark"}`}>Investors</Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <SiteSearch light={lightNav} />
          <ThemeToggle compact />
          <button type="button" className={`rounded-xl p-2.5 ${lightNav ? "text-white" : "text-itc-slate dark:text-white"}`} aria-expanded={mobileOpen} aria-label="Menu" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="max-h-[70vh] overflow-y-auto border-t border-itc-green/10 bg-white/95 px-4 py-4 dark:border-white/10 dark:bg-[#0a0f14]/95 lg:hidden">
          <nav className="flex flex-col gap-0.5">
            {flatMobileLinks.map((item, i) =>
              item.type === "header" ? (
                <p key={`h-${i}`} className="mt-3 px-3 text-[10px] font-bold uppercase tracking-widest text-itc-green first:mt-0 dark:text-itc-gold-light">{item.label}</p>
              ) : (
                <Link key={item.href + item.label} href={item.href} className="rounded-xl px-4 py-2.5 text-sm font-medium text-itc-slate dark:text-white/80">{item.label}</Link>
              )
            )}
            <Link href="/brands" className="mt-2 rounded-xl px-4 py-2.5 text-sm font-medium text-itc-slate dark:text-white/80">World of Brands</Link>
            <Link href="/investors" className="btn-primary mt-3 justify-center">Investor Relations</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
