import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link href="/" className="font-medium text-itc-slate-muted transition-colors hover:text-itc-green dark:text-white/50 dark:hover:text-itc-gold-light">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            <span className="text-itc-slate-muted/40 dark:text-white/30">/</span>
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="font-medium text-itc-slate-muted transition-colors hover:text-itc-green dark:text-white/50 dark:hover:text-itc-gold-light">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-itc-green dark:text-itc-gold-light">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
