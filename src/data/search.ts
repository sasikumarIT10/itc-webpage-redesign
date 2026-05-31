import { newsArticles } from "./news";
import { businesses } from "./businesses";
import { brands } from "./brands";
import { sitemapSections } from "./navigation";

export type SearchResult = {
  title: string;
  href: string;
  type: string;
  excerpt: string;
};

export function buildSearchIndex(): SearchResult[] {
  const pages = sitemapSections.flatMap((s) =>
    s.links.map((l) => ({
      title: l.label,
      href: l.href,
      type: "Page",
      excerpt: s.title,
    }))
  );

  const articles = newsArticles.map((a) => ({
    title: a.title,
    href: `/media/${a.slug}`,
    type: a.category,
    excerpt: a.excerpt,
  }));

  const biz = businesses.map((b) => ({
    title: b.title,
    href: `/businesses/${b.id}`,
    type: "Business",
    excerpt: b.description,
  }));

  const brandResults = brands.map((b) => ({
    title: b.name,
    href: "/brands",
    type: "Brand",
    excerpt: b.tagline,
  }));

  return [...pages, ...articles, ...biz, ...brandResults];
}

export function searchSite(query: string, limit = 12): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return buildSearchIndex()
    .filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
    )
    .slice(0, limit);
}
