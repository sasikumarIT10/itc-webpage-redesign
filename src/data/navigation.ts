export type NavItem = { label: string; href: string; description?: string };

export type MegaMenuSection = {
  title: string;
  href: string;
  links: NavItem[];
};

export const megaMenu: MegaMenuSection[] = [
  {
    title: "About ITC",
    href: "/about",
    links: [
      { label: "About Us", href: "/about", description: "Mission, vision & values" },
      { label: "History & Evolution", href: "/about/history", description: "Over a century of growth" },
      { label: "Leadership", href: "/about/leadership", description: "Board & management" },
      { label: "Awards & Recognition", href: "/about/awards", description: "Honours & accolades" },
    ],
  },
  {
    title: "Businesses",
    href: "/businesses",
    links: [
      { label: "FMCG", href: "/businesses/fmcg", description: "Foods, personal care & more" },
      { label: "Agri Business", href: "/businesses/agri", description: "Integrated agri value chain" },
      { label: "Paperboards", href: "/businesses/paper", description: "Specialty papers & boards" },
      { label: "Packaging", href: "/businesses/packaging", description: "Value-added packaging" },
      { label: "ITC Infotech", href: "/businesses/it", description: "Digital & technology services" },
    ],
  },
  {
    title: "Sustainability",
    href: "/sustainability",
    links: [
      { label: "Sustainability Vision", href: "/sustainability", description: "Strategy & pillars" },
      { label: "Reports & Disclosures", href: "/sustainability/reports", description: "ESG publications" },
      { label: "CSR & Social Impact", href: "/sustainability#csr", description: "Community programmes" },
    ],
  },
  {
    title: "Investors",
    href: "/investors",
    links: [
      { label: "Financial Results", href: "/investors", description: "Quarterly & annual" },
      { label: "Shareholder Info", href: "/investors#shareholder", description: "Dividends & meetings" },
      { label: "Stock Information", href: "/investors#stock", description: "NSE / BSE listings" },
    ],
  },
  {
    title: "Media",
    href: "/media",
    links: [
      { label: "Press Releases", href: "/media", description: "Latest announcements" },
      { label: "Everyday Stories", href: "/media#stories", description: "Brand & people stories" },
      { label: "Leadership Speaks", href: "/about/leadership", description: "Executive perspectives" },
    ],
  },
];

export const footerSections = {
  about: [
    { label: "About ITC", href: "/about" },
    { label: "History", href: "/about/history" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Awards", href: "/about/awards" },
  ],
  businesses: [
    { label: "All Businesses", href: "/businesses" },
    { label: "World of Brands", href: "/brands" },
    { label: "FMCG", href: "/businesses/fmcg" },
    { label: "Agri Business", href: "/businesses/agri" },
  ],
  resources: [
    { label: "Sustainability", href: "/sustainability" },
    { label: "Investor Relations", href: "/investors" },
    { label: "Media Centre", href: "/media" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Our Policies", href: "/legal/policies" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};

export const sitemapSections = [
  { title: "Home", links: [{ label: "Homepage", href: "/" }] },
  { title: "About ITC", links: footerSections.about },
  { title: "Businesses", links: [...footerSections.businesses, { label: "Paperboards", href: "/businesses/paper" }, { label: "Packaging", href: "/businesses/packaging" }, { label: "IT", href: "/businesses/it" }] },
  { title: "Sustainability", links: [{ label: "Overview", href: "/sustainability" }, { label: "Reports", href: "/sustainability/reports" }] },
  { title: "Investors & Media", links: [{ label: "Investors", href: "/investors" }, { label: "Media Centre", href: "/media" }] },
  { title: "Careers & Contact", links: [{ label: "Careers", href: "/careers" }, { label: "Contact", href: "/contact" }] },
  { title: "Legal", links: footerSections.legal },
];
