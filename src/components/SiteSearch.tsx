"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { searchSite, type SearchResult } from "@/data/search";

export function SiteSearch({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [open]);

  useEffect(() => {
    setResults(searchSite(query));
  }, [query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
          light
            ? "border-white/20 bg-white/10 text-white/80 hover:bg-white/20"
            : "border-itc-green/15 bg-itc-green-muted/40 text-itc-slate-muted hover:border-itc-green/30 dark:border-white/15 dark:bg-white/10 dark:text-white/60"
        }`}
        aria-label="Search site"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden xl:inline">Search</span>
        <kbd className="hidden rounded bg-black/10 px-1.5 py-0.5 text-[10px] xl:inline dark:bg-white/10">⌘K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center bg-black/60 p-4 pt-[12vh] backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-itc-green/15 bg-white shadow-elevated dark:border-white/10 dark:bg-[#141b24]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-itc-green/10 px-4 dark:border-white/10">
              <svg className="h-5 w-5 text-itc-slate-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, news, brands, businesses..."
                className="flex-1 bg-transparent py-4 text-sm outline-none dark:text-white"
              />
              <button type="button" onClick={() => setOpen(false)} className="text-xs text-itc-slate-muted hover:text-itc-green">
                ESC
              </button>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 ? (
                <li className="px-4 py-8 text-center text-sm text-itc-slate-muted dark:text-white/50">
                  {query ? "No results found." : "Type to search the ITC prototype..."}
                </li>
              ) : (
                results.map((r) => (
                  <li key={r.href + r.title}>
                    <Link
                      href={r.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 transition-colors hover:bg-itc-green-muted dark:hover:bg-white/5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-itc-slate dark:text-white">{r.title}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-itc-green dark:text-itc-gold-light">{r.type}</span>
                      </div>
                      <p className="mt-1 line-clamp-1 text-xs text-itc-slate-muted dark:text-white/50">{r.excerpt}</p>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
