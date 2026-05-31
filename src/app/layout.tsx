import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ITC Limited | Redesign Prototype",
  description:
    "Modern homepage prototype for ITC Limited — FMCG, Agri, Paperboards, Packaging and IT.",
};

const themeInitScript = `
(function () {
  try {
    var modes = ['light', 'dark', 'auto', 'system'];
    var stored = localStorage.getItem('itc-theme-preference');
    var mode = modes.indexOf(stored) >= 0 ? stored : 'auto';
    var resolved = 'light';
    if (mode === 'dark') resolved = 'dark';
    else if (mode === 'auto') {
      var h = new Date().getHours();
      resolved = (h >= 19 || h < 6) ? 'dark' : 'light';
    } else if (mode === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.classList.add(resolved);
    document.documentElement.style.colorScheme = resolved;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body className="font-sans transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
