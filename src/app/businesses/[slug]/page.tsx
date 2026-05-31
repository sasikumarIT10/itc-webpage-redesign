import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBusiness, businesses } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBanner } from "@/components/CtaBanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const biz = getBusiness(slug);
  if (!biz) return { title: "Business | ITC Limited" };
  return { title: `${biz.title} | ITC Limited`, description: biz.description };
}

export default async function BusinessDetailPage({ params }: Props) {
  const { slug } = await params;
  const biz = getBusiness(slug);
  if (!biz) notFound();

  const others = businesses.filter((b) => b.id !== slug);

  return (
    <>
      <PageHero label="Our Businesses" title={biz.headline} description={biz.description} image={biz.image} />
      <section className="section-padding bg-white dark:bg-[#0a0f14]">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Businesses", href: "/businesses" }, { label: biz.title }]} />
          <div className="grid gap-12 lg:grid-cols-3">
            <ScrollReveal className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-itc-slate-muted dark:text-white/70">{biz.longDescription}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {biz.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-itc-green/15 bg-itc-green-muted/50 px-3 py-1 text-xs font-bold text-itc-green dark:bg-itc-green/10 dark:text-itc-green-bright">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-10 font-display text-2xl font-bold text-itc-slate dark:text-white">Key Initiatives</h2>
              <ul className="mt-4 space-y-3">
                {biz.initiatives.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-itc-slate-muted dark:text-white/65">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-itc-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              {biz.brands && (
                <>
                  <h2 className="mt-10 font-display text-2xl font-bold text-itc-slate dark:text-white">Featured Brands</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {biz.brands.map((brand) => (
                      <Link key={brand} href="/brands" className="rounded-full bg-itc-slate-light px-4 py-2 text-sm font-semibold text-itc-green hover:bg-itc-green-muted dark:bg-white/5 dark:text-itc-gold-light">
                        {brand}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="card-premium sticky top-28 p-6">
                <h3 className="font-bold text-itc-slate dark:text-white">At a Glance</h3>
                <dl className="mt-4 space-y-4">
                  {biz.highlights.map((h) => (
                    <div key={h.label}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-itc-slate-muted dark:text-white/50">{h.label}</dt>
                      <dd className="font-display text-2xl font-bold text-itc-green dark:text-itc-green-bright">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-itc-slate-light dark:bg-[#141b24]">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-bold text-itc-slate dark:text-white">Other Businesses</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((b) => (
              <Link key={b.id} href={`/businesses/${b.id}`} className="card-premium group p-5">
                <div className="relative mb-4 h-24 overflow-hidden rounded-xl">
                  <Image src={b.image} alt="" fill className="object-cover transition-transform group-hover:scale-105" sizes="200px" />
                </div>
                <h3 className="font-bold text-itc-slate group-hover:text-itc-green dark:text-white">{b.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Explore ITC's World of Brands" description="Discover 25+ mother brands loved across India." primary={{ label: "View Brands", href: "/brands" }} secondary={{ label: "Contact Us", href: "/contact" }} />
    </>
  );
}
