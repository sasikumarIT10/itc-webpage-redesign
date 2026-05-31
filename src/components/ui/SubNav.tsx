"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SubNavItem = { label: string; href: string };

export function SubNav({ items }: { items: SubNavItem[] }) {
  const pathname = usePathname();

  return (
    <div className="border-b border-itc-green/10 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-[#0a0f14]/80">
      <div className="container-wide overflow-x-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 py-3">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-itc-green text-white shadow-glow"
                    : "text-itc-slate-muted hover:bg-itc-green-muted hover:text-itc-green dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-itc-gold-light"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
