export type NewsArticle = {
  slug: string;
  category: "Brands" | "Leadership" | "Awards" | "Financial";
  title: string;
  date: string;
  excerpt: string;
  gradient: string;
  image: string;
  featured?: boolean;
  body: string[];
  author?: string;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "sunfeast-smoothies-launch",
    category: "Brands",
    title: "Sunfeast Smoothies by ITC: Much More Than A Milkshake",
    date: "May 2026",
    excerpt:
      "Thick, creamy, indulgent smoothies crafted for today's generation seeking rich textures and fruit-led goodness.",
    gradient: "from-orange-400 via-rose-400 to-pink-500",
    image: "/images/news-brands.jpg",
    featured: true,
    author: "ITC Foods Division",
    body: [
      "Introducing the all-new Sunfeast Smoothies by ITC — thick, creamy, indulgent, and made for today's generation that is increasingly drawn to rich textures, fruit-led goodness, satiety, and a more elevated experience over regular milkshakes.",
      "Crafted with consumer insights at the core, Sunfeast Smoothies represent ITC's continued commitment to premiumisation in the packaged foods segment, delivering a differentiated product experience across modern trade and general trade channels.",
      "The launch strengthens Sunfeast's portfolio in the beverages adjacency, building on the brand's equity in indulgence and quality that Indian households have trusted for years.",
    ],
  },
  {
    slug: "cmd-scale-fmcg-outlook",
    category: "Leadership",
    title: "ITC eyes scale across FMCG, hotels and digital channels",
    date: "May 2026",
    excerpt:
      "Chairman & MD Sanjiv Puri on India's long runway for growth and the company's next phase of expansion.",
    gradient: "from-itc-green via-emerald-500 to-teal-600",
    image: "/images/leadership.jpg",
    author: "CNBC-TV18",
    body: [
      "Sanjiv Puri, Chairman and Managing Director of ITC, is betting on India's long runway for growth to drive the company's next phase across FMCG, hotels and digital channels.",
      "In a wide-ranging discussion, Mr. Puri highlighted portfolio expansion, premiumisation and deeper digital adoption as key growth levers for the FMCG business.",
      "ITC continues to invest in manufacturing capacity, brand building and route-to-market excellence to capture emerging consumption trends across urban and rural India.",
    ],
  },
  {
    slug: "imsc-sustainability-rank-1",
    category: "Awards",
    title: "Ranked #1 — India's Most Sustainable Companies",
    date: "2026",
    excerpt:
      "ITC ranked No. 1 in Business World IMSC Ranking under the Conglomerates Sector for the 5th edition.",
    gradient: "from-itc-gold via-amber-400 to-yellow-500",
    image: "/images/sustainability.jpg",
    body: [
      "ITC has been ranked No. 1 in the 5th Edition of Business World India's Most Sustainable Companies (IMSC) Ranking under the Conglomerates Sector.",
      "The recognition reaffirms ITC's leadership in environmental stewardship, social inclusion and governance — the three pillars of its Triple Bottom Line philosophy.",
      "ITC remains carbon positive, water positive and solid waste recycling positive for nearly two decades, setting benchmarks for sustainable business in India.",
    ],
  },
  {
    slug: "financial-results-q4-fy26",
    category: "Financial",
    title: "Financial Results — Quarter ended 31st March 2026",
    date: "Q4 FY26",
    excerpt:
      "Latest quarterly results, media statement and investor presentation now available.",
    gradient: "from-slate-600 via-itc-slate to-itc-green-dark",
    image: "/images/hero-poster.jpg",
    body: [
      "ITC Limited has announced its financial results for the quarter ended 31st March 2026.",
      "The results reflect resilient performance across FMCG, Agri and Paperboards businesses amid a dynamic operating environment.",
      "Investors can access the media statement, quarterly presentation and detailed financial statements on the Investor Relations section of this portal.",
    ],
  },
  {
    slug: "fiama-bathing-joy",
    category: "Brands",
    title: "ITC Fiama: Bringing the Joy in Bathing",
    date: "April 2026",
    excerpt: "A vibrant, youthful portfolio for the young at heart — turning everyday bathing into something to look forward to.",
    gradient: "from-purple-400 via-violet-500 to-indigo-600",
    image: "/images/news-brands.jpg",
    body: [
      "ITC Fiama has built a vibrant portfolio designed for the young at heart, transforming everyday bathing into an indulgent, sensorial experience.",
      "With innovative formats spanning gel bars, shower gels and mood-inspired fragrances, Fiama continues to expand its presence in the personal wash category.",
    ],
  },
  {
    slug: "supply-chain-excellence-award",
    category: "Awards",
    title: "Trade Marketing & Distribution Wins Supply Chain Excellence",
    date: "March 2026",
    excerpt: "Multiple awards at the CII-IQ Digital Transformation & AI Competition for Quality Improvements.",
    gradient: "from-teal-500 via-cyan-500 to-blue-600",
    image: "/images/sustainability.jpg",
    body: [
      "ITC's Trade Marketing & Distribution Division won multiple awards at the CII-IQ Digital Transformation and Artificial Intelligence Competition.",
      "The recognition highlights ITC's continued investment in supply chain digitisation, AI-driven quality improvements and last-mile excellence.",
    ],
  },
];

export function getArticle(slug: string) {
  return newsArticles.find((a) => a.slug === slug);
}

export const newsItems = newsArticles;
