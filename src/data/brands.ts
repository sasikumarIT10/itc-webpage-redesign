export type Brand = {
  name: string;
  slug: string;
  image: string;
  category: "Foods" | "Personal Care" | "Education & Stationery" | "Homecare" | "Matches & Agarbatti";
  tagline: string;
  href?: string;
};

export const brandCategories = [
  "Foods",
  "Personal Care",
  "Education & Stationery",
  "Homecare",
  "Matches & Agarbatti",
] as const;

export const brands: Brand[] = [
  { name: "Sunfeast", slug: "sunfeast", image: "/images/brands/sunfeast.jpg", category: "Foods", tagline: "Biscuits, noodles & indulgent treats" },
  { name: "Aashirvaad", slug: "aashirvaad", image: "/images/brands/aashirvaad.jpg", category: "Foods", tagline: "India's No. 1 atta brand" },
  { name: "Yippee!", slug: "yippee", image: "/images/brands/yippee.jpg", category: "Foods", tagline: "Noodles with a twist" },
  { name: "Bingo!", slug: "bingo", image: "/images/brands/bingo.jpg", category: "Foods", tagline: "Snacks with attitude" },
  { name: "Farmlite", slug: "farmlite", image: "/images/brands/farmlite.jpg", category: "Foods", tagline: "Health-forward biscuits" },
  { name: "Mom's Magic", slug: "moms-magic", image: "/images/brands/moms-magic.jpg", category: "Foods", tagline: "Baked with love" },
  { name: "Candyman", slug: "candyman", image: "/images/brands/candyman.jpg", category: "Foods", tagline: "Confectionery & fun" },
  { name: "Fiama", slug: "fiama", image: "/images/brands/fiama.jpg", category: "Personal Care", tagline: "Joy in bathing" },
  { name: "Vivel", slug: "vivel", image: "/images/brands/vivel.jpg", category: "Personal Care", tagline: "Skincare & soaps" },
  { name: "Engage", slug: "engage", image: "/images/brands/engage.jpg", category: "Personal Care", tagline: "Fragrances & deodorants" },
  { name: "Classmate", slug: "classmate", image: "/images/brands/classmate.jpg", category: "Education & Stationery", tagline: "Notebooks & stationery" },
  { name: "Paperkraft", slug: "paperkraft", image: "/images/brands/paperkraft.jpg", category: "Education & Stationery", tagline: "Premium stationery" },
  { name: "Nimyle", slug: "nimyle", image: "/images/brands/nimyle.jpg", category: "Homecare", tagline: "Home hygiene solutions" },
  { name: "Mangaldeep", slug: "mangaldeep", image: "/images/brands/mangaldeep.jpg", category: "Matches & Agarbatti", tagline: "Agarbattis & spiritual wellness" },
  { name: "AIM", slug: "aim", image: "/images/brands/aim.jpg", category: "Matches & Agarbatti", tagline: "Safety matches" },
];

export const brandNames = brands.map((b) => b.name);
