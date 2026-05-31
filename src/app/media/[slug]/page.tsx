import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticle, newsArticles } from "@/data/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "News | ITC Limited" };
  return { title: `${article.title} | ITC Media`, description: article.excerpt };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = newsArticles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 2);

  return (
    <>
      <section className="relative bg-itc-slate pt-28 dark:bg-[#060a0e] lg:pt-32">
        <div className="absolute inset-0">
          <Image src={article.image} alt="" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} mix-blend-multiply opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-itc-slate via-itc-slate/80 to-transparent" />
        </div>
        <div className="container-wide relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Breadcrumbs items={[{ label: "Media", href: "/media" }, { label: article.category }]} />
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-itc-gold-light backdrop-blur-sm">
            {article.category}
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{article.title}</h1>
          <p className="mt-4 text-sm text-white/60">
            {article.date}
            {article.author && ` · ${article.author}`}
          </p>
        </div>
      </section>

      <article className="section-padding bg-white dark:bg-[#0a0f14]">
        <div className="container-wide mx-auto max-w-3xl">
          {article.body.map((para, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <p className="mb-6 text-lg leading-relaxed text-itc-slate-muted dark:text-white/75">{para}</p>
            </ScrollReveal>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-padding bg-itc-slate-light dark:bg-[#141b24]">
          <div className="container-wide">
            <h2 className="font-display text-2xl font-bold text-itc-slate dark:text-white">Related Stories</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((a) => (
                <Link key={a.slug} href={`/media/${a.slug}`} className="card-premium group overflow-hidden">
                  <div className="relative h-40">
                    <Image src={a.image} alt="" fill className="object-cover" sizes="400px" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-itc-slate group-hover:text-itc-green dark:text-white">{a.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-itc-slate-muted dark:text-white/55">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner title="Stay Updated" description="Browse all press releases and stories from ITC." primary={{ label: "Media Centre", href: "/media" }} secondary={{ label: "Investor Relations", href: "/investors" }} />
    </>
  );
}
