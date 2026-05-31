"use client";

import Link from "next/link";
import { megaMenu } from "@/data/site";

type MegaMenuProps = {
  light?: boolean;
  openSection: string | null;
  onOpen: (title: string | null) => void;
};

export function MegaMenu({ light, openSection, onOpen }: MegaMenuProps) {
  return (
    <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
      {megaMenu.map((section) => (
        <div
          key={section.title}
          className="relative"
          onMouseEnter={() => onOpen(section.title)}
          onMouseLeave={() => onOpen(null)}
        >
          <Link
            href={section.href}
            className={`group relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
              light ? "text-white/85 hover:text-white" : "text-itc-slate-muted hover:text-itc-green dark:text-white/70 dark:hover:text-itc-gold-light"
            }`}
          >
            {section.title}
            <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-itc-gold transition-transform duration-300 group-hover:scale-x-100" />
          </Link>

          {openSection === section.title && (
            <div className="absolute left-0 top-full z-50 w-72 pt-2">
              <div className="overflow-hidden rounded-2xl border border-itc-green/10 bg-white p-2 shadow-elevated dark:border-white/10 dark:bg-[#141b24]">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-itc-green-muted dark:hover:bg-white/5"
                  >
                    <span className="font-semibold text-itc-slate dark:text-white">{link.label}</span>
                    {link.description && (
                      <p className="mt-0.5 text-xs text-itc-slate-muted dark:text-white/50">{link.description}</p>
                    )}
                  </Link>
                ))}
                <Link href={section.href} className="mt-1 block rounded-xl px-4 py-2 text-xs font-bold text-itc-green dark:text-itc-gold-light">
                  View all →
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
