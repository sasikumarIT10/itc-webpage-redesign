import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CtaBanner({ title, description, primary, secondary }: CtaBannerProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-itc-green-dark via-itc-green to-itc-green-light">
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={primary.href} className="btn-primary bg-white text-itc-green-dark hover:bg-itc-gold-light">
            {primary.label}
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn-secondary">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
