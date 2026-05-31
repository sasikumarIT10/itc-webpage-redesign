import Link from "next/link";
import { legalContent } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata = { title: "Our Policies | ITC Limited" };

export default function PoliciesPage() {
  return (
    <>
      <PageHero label="Legal" title={legalContent.policies.title} description={`Last updated: ${legalContent.policies.updated}`} image="/images/sustainability.jpg" />
      <section className="section-padding bg-itc-slate-light dark:bg-[#0a0f14]">
        <div className="container-wide mx-auto max-w-2xl">
          <Breadcrumbs items={[{ label: "Legal" }, { label: "Policies" }]} />
          <ul className="mt-10 space-y-3">
            {legalContent.policies.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="card-premium block p-5 font-semibold text-itc-slate hover:text-itc-green dark:text-white dark:hover:text-itc-green-bright">
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
