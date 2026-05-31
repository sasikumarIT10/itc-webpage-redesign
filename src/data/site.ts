export { navLinks, aboutContent, investorsContent, careersContent, contactContent, sustainabilityPageContent, heroContent, stats, sustainabilityHighlights, leadershipQuotes, leadershipTeam, awardsList, resources, legalContent } from "./content";
export { brandNames, brands, brandCategories } from "./brands";
export { newsArticles, newsItems, getArticle } from "./news";
export { businesses, getBusiness } from "./businesses";
export type { BusinessDetail } from "./businesses";
export type { NewsArticle } from "./news";
export { megaMenu, footerSections, sitemapSections } from "./navigation";
export type { MegaMenuSection, NavItem } from "./navigation";

// Legacy footer shape for existing Footer component
export const footerLinks = {
  explore: [
    { label: "About ITC", href: "/about" },
    { label: "World of Brands", href: "/brands" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Investor Relations", href: "/investors" },
    { label: "Media Centre", href: "/media" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Our Policies", href: "/legal/policies" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};
