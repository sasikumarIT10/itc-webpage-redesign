import Link from "next/link";
import { legalContent } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

type Props = { params: Promise<{ slug: string }> };

const pages: Record<string, typeof legalContent.terms> = {
  terms: legalContent.terms,
  privacy: legalContent.privacy,
};

export async function generateStaticParams() {
  return [{ slug: "terms" }, { slug: "privacy" }];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  return { title: page ? `${page.title} | ITC Limited` : "Legal | ITC Limited" };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return null;

  return (
    <>
      <PageHero label="Legal" title={page.title} description={`Last updated: ${page.updated}`} image="/images/hero-poster.jpg" />
      <section className="section-padding bg-white dark:bg-[#0a0f14]">
        <div className="container-wide mx-auto max-w-3xl">
          <Breadcrumbs items={[{ label: "Legal" }, { label: page.title }]} />
          <div className="mt-10 space-y-8">
            {page.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl font-bold text-itc-slate dark:text-white">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-itc-slate-muted dark:text-white/65">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/sitemap" className="font-bold text-itc-green dark:text-itc-green-bright">View sitemap →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
