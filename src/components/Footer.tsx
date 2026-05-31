import Link from "next/link";
import { ItcLogo } from "@/components/ItcLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { footerSections } from "@/data/site";

const socialLinks = [
  { label: "Instagram", abbr: "IG" },
  { label: "X", abbr: "X" },
  { label: "LinkedIn", abbr: "in" },
  { label: "YouTube", abbr: "YT" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-itc-slate text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-itc-green via-itc-gold to-itc-green-light" />
      <div className="noise-overlay opacity-[0.03]" />

      <div className="container-wide section-padding pb-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
          <ItcLogo showText light />
          <ThemeToggle />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="text-sm leading-relaxed text-white/60">
              ITC Limited — diversified presence in FMCG, Paperboards &amp; Packaging, Agri-business and IT.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((s) => (
                <span key={s.label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-white/70" aria-label={s.label}>
                  {s.abbr}
                </span>
              ))}
            </div>
          </div>

          {Object.entries(footerSections).map(([key, links]) => (
            <div key={key}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-itc-gold-light">
                {key === "about" ? "About" : key === "businesses" ? "Businesses" : key === "resources" ? "Resources" : "Legal"}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
                      <span className="h-px w-0 bg-itc-gold transition-all group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
          <p className="font-semibold text-white/80">Registered Office</p>
          <p className="mt-2">ITC LIMITED · Virginia House, 37, J. L. Nehru Road · Kolkata - 700071</p>
          <p className="mt-1">
            <a href="mailto:contactus@itc.in" className="text-itc-gold-light hover:text-itc-gold">contactus@itc.in</a>
            {" · "}Ph: +91-33-22889371
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">© 2026 ITC Limited. Redesign prototype — not the production site.</p>
          <p className="text-xs text-white/40">CIN: L16005WB1910PLC001985</p>
        </div>
      </div>
    </footer>
  );
}
