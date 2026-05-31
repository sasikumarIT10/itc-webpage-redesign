import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BrandMarquee } from "@/components/BrandMarquee";
import { businesses } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import Image from "next/image";

export const metadata = {
  title: "Our Businesses | ITC Limited",
  description: "Explore ITC's diverse portfolio — FMCG, Agri, Paperboards, Packaging and IT.",
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero label="Our Businesses" title="Diverse Portfolio, Unified Purpose" description="From everyday consumer brands to agri innovation and global IT services." image="/images/news-agri.jpg" />
      <BrandMarquee />
      <section className="section-padding bg-white dark:bg-[#0a0f14]">
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeading align="center" label="Five Divisions" title="Future-Ready Businesses" />
          </ScrollReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((b, i) => (
              <ScrollReveal key={b.id} delay={i * 80}>
                <Link href={`/businesses/${b.id}`} className="card-premium group block overflow-hidden">
                  <div className="relative h-44">
                    <Image src={b.image} alt="" fill className="object-cover transition-transform group-hover:scale-105" sizes="400px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <h2 className="absolute bottom-4 left-4 font-display text-2xl font-bold text-white">{b.title}</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-itc-slate-muted dark:text-white/60">{b.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-itc-green dark:text-itc-green-bright">
                      Explore division →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="World of Brands" description="Discover the consumer brands behind ITC's FMCG success." primary={{ label: "View Brands", href: "/brands" }} secondary={{ label: "Contact", href: "/contact" }} />
    </>
  );
}
