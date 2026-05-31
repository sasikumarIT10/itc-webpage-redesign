import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-itc-slate-light px-4 dark:bg-[#0a0f14]">
      <div className="text-center">
        <p className="text-6xl font-black text-itc-green dark:text-itc-green-bright">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-itc-slate dark:text-white">Page Not Found</h1>
        <p className="mt-3 text-itc-slate-muted dark:text-white/60">The page you&apos;re looking for doesn&apos;t exist in this prototype.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/sitemap" className="btn-outline">View Sitemap</Link>
        </div>
      </div>
    </section>
  );
}
