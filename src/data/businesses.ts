export type BusinessDetail = {
  id: string;
  title: string;
  headline: string;
  description: string;
  longDescription: string;
  tags: string[];
  accent: string;
  iconBg: string;
  image: string;
  highlights: { label: string; value: string }[];
  initiatives: string[];
  brands?: string[];
};

export const businesses: BusinessDetail[] = [
  {
    id: "fmcg",
    title: "FMCG",
    headline: "India's Leading FMCG Marketer",
    description:
      "Leading marketer in packaged foods, personal care, education & stationery, agarbattis and matches — reaching over 26 crore households.",
    longDescription:
      "ITC's FMCG business is one of India's leading marketers in Fast Moving Consumer Goods. The portfolio spans packaged foods, personal care, education and stationery, agarbattis and safety matches — with 25 vibrant mother brands reaching over 26 crore households. Consumer insight, agile innovation and a deep rural-urban distribution network drive sustained growth.",
    tags: ["Food", "Personal Care", "Stationery", "Matches & Agarbatti"],
    accent: "from-orange-500/20 via-amber-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-orange-400 to-amber-600",
    image: "/images/news-brands.jpg",
    highlights: [
      { label: "Mother Brands", value: "25+" },
      { label: "Households", value: "26 Cr+" },
      { label: "Categories", value: "6+" },
      { label: "Factories", value: "60+" },
    ],
    initiatives: [
      "Portfolio premiumisation across foods and personal care",
      "Protein-rich and health-focused product innovation",
      "Digital-first brand building and e-commerce expansion",
      "Sustainable packaging and plastic neutrality programmes",
    ],
    brands: ["Sunfeast", "Aashirvaad", "Bingo!", "Fiama", "Classmate", "Yippee!"],
  },
  {
    id: "agri",
    title: "Agri Business",
    headline: "Integrated Agri Value Chain Leader",
    description:
      "One of India's largest integrated agri enterprises with presence across every node of the agri value chain.",
    longDescription:
      "ITC's Agri Business is one of India's largest integrated agri enterprises with significant presence across sourcing, processing, branding and exports. From ITC Spices and ITCMAARS to Mission Millets, the division empowers farmers while building scalable, traceable supply chains.",
    tags: ["ITC Spices", "ITCMAARS", "Mission Millets", "e-Choupal"],
    accent: "from-lime-500/20 via-green-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-lime-500 to-green-700",
    image: "/images/news-agri.jpg",
    highlights: [
      { label: "Farmers Reached", value: "4 M+" },
      { label: "Commodities", value: "25+" },
      { label: "Export Markets", value: "90+" },
      { label: "e-Choupal", value: "Pioneer" },
    ],
    initiatives: [
      "Climate Smart Agriculture programmes",
      "ITCMAARS — phygital agri marketplace",
      "SpiceSecure traceability framework",
      "Organic and millets-led nutrition mission",
    ],
  },
  {
    id: "paper",
    title: "Paperboards & Specialty Papers",
    headline: "Global Leader in Paperboards",
    description:
      "Amongst the leading names worldwide in packaging and graphic boards, specialty papers and innovative communication solutions.",
    longDescription:
      "ITC's Paperboards and Specialty Papers Division (ITC PSPD) manufactures packaging and graphic boards accompanied by a diverse range of specialty papers. Innovative, sustainable solutions help meet packaging and communication needs for leading brands globally.",
    tags: ["Packaging Boards", "Specialty Papers", "Graphic Boards"],
    accent: "from-blue-500/20 via-sky-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-sky-400 to-blue-700",
    image: "/images/sustainability.jpg",
    highlights: [
      { label: "Capacity", value: "Leading" },
      { label: "Certifications", value: "FSC®" },
      { label: "Recycling", value: "Positive" },
      { label: "Innovation", value: "R&D-led" },
    ],
    initiatives: [
      "Sustainable fibre sourcing and FSC certification",
      "Barrier coatings for plastic substitution",
      "Energy-efficient manufacturing",
      "Circular economy partnerships",
    ],
  },
  {
    id: "packaging",
    title: "Packaging",
    headline: "South Asia's Largest Value-Added Converter",
    description:
      "South Asia's largest value-added converter of paperboard packaging for food, beverage, personal care and consumer goods.",
    longDescription:
      "ITC's Packaging & Printing Business converts over 1,00,000 tonnes of paper, paperboard and laminates per annum into value-added packaging for food, beverage, personal care, liquor, QSR and consumer goods industries — combining design excellence with sustainability.",
    tags: ["Sustainable Packaging", "Food & Beverage", "Personal Care"],
    accent: "from-violet-500/20 via-purple-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-violet-400 to-purple-700",
    image: "/images/hero-poster.jpg",
    highlights: [
      { label: "Conversion", value: "1L+ Tonnes" },
      { label: "Industries", value: "8+" },
      { label: "Facilities", value: "Multi-loc" },
      { label: "Design", value: "In-house" },
    ],
    initiatives: [
      "Sustainable packaging solutions for FMCG partners",
      "Premium structural and graphic design capability",
      "Print innovation and short-run agility",
      "Recyclable mono-material structures",
    ],
  },
  {
    id: "it",
    title: "Information Technology",
    headline: "ITC Infotech — Future-Ready Digital Partner",
    description:
      "ITC Infotech delivers business-friendly digital solutions with deep domain expertise from ITC Group businesses.",
    longDescription:
      "ITC Infotech is a leading global technology services and solutions provider, led by business and technology consulting. It seamlessly brings together digital expertise, industry alliances and deep domain knowledge from ITC Group businesses to help clients succeed in a digital-first world.",
    tags: ["Digital Consulting", "ITC Infotech", "Cloud & AI"],
    accent: "from-cyan-500/20 via-teal-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-cyan-400 to-teal-700",
    image: "/images/leadership.jpg",
    highlights: [
      { label: "Global Clients", value: "500+" },
      { label: "Domains", value: "Multi" },
      { label: "Focus", value: "AI & Cloud" },
      { label: "Delivery", value: "Global" },
    ],
    initiatives: [
      "Business-friendly digital transformation",
      "Industry-specific alliances and accelerators",
      "AI and automation for enterprise productivity",
      "Deep domain expertise from ITC Group",
    ],
  },
];

export function getBusiness(id: string) {
  return businesses.find((b) => b.id === id);
}
