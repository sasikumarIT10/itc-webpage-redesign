import Link from "next/link";
import { sitemapSections } from "@/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Sitemap | ITC Limited" };

export default function SitemapPage() {
  return (
    <>
      <PageHero label="Sitemap" title="Explore the ITC Prototype" description="Complete map of all pages in this redesign demonstration." image="/images/hero-poster.jpg" />
      <section className="section-padding bg-white dark:bg-[#0a0f14]">
        <div className="container-wide">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {sitemapSections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-lg font-bold text-itc-green dark:text-itc-green-bright">{section.title}</h2>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-itc-slate-muted transition-colors hover:text-itc-green dark:text-white/60 dark:hover:text-itc-gold-light">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
