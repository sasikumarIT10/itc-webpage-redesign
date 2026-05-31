import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        itc: {
          green: {
            DEFAULT: "#1B5E3B",
            dark: "#0A2E1C",
            light: "#2D8A5A",
            bright: "#3CB179",
            muted: "#E8F5EE",
          },
          gold: {
            DEFAULT: "#C9A227",
            light: "#F0D78C",
            dark: "#9A7B1A",
          },
          slate: {
            DEFAULT: "#0F1419",
            muted: "#64748B",
            light: "#F8FAFB",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(45, 138, 90, 0.45)",
        "glow-gold": "0 0 40px -8px rgba(201, 162, 39, 0.35)",
        card: "0 4px 24px -4px rgba(15, 20, 25, 0.08)",
        "card-hover": "0 20px 50px -12px rgba(27, 94, 59, 0.2)",
        elevated: "0 25px 60px -15px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-green":
          "radial-gradient(at 40% 20%, rgba(45,138,90,0.4) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(201,162,39,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(27,94,59,0.3) 0px, transparent 50%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
