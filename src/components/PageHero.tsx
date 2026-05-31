import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
  image?: string;
  cta?: { label: string; href: string };
};

export function PageHero({ label, title, description, image = "/images/hero-poster.jpg", cta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-itc-slate pt-28 dark:bg-[#060a0e] lg:pt-32">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className="object-cover opacity-35" priority sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-itc-slate via-itc-slate/90 to-itc-green-dark/70" />
      <div className="noise-overlay opacity-[0.04]" />

      <div className="container-wide relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="section-label-dark border-itc-gold/30 bg-itc-gold/10">{label}</p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>
        )}
        {cta && (
          <Link href={cta.href} className="btn-primary mt-8 inline-flex">
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
