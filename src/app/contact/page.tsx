import { PageHero } from "@/components/PageHero";
import { contactContent } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact Us | ITC Limited",
  description: contactContent.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label={contactContent.label}
        title={contactContent.title}
        description={contactContent.description}
        image="/images/sustainability.jpg"
      />

      <section className="section-padding bg-itc-slate-light dark:bg-[#0a0f14]">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <div className="card-premium h-full p-8">
                <h2 className="font-display text-2xl font-bold text-itc-slate dark:text-white">
                  Registered Office
                </h2>
                <address className="mt-6 space-y-2 not-italic leading-relaxed text-itc-slate-muted dark:text-white/65">
                  {contactContent.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
                <dl className="mt-8 space-y-4 text-sm">
                  <div>
                    <dt className="font-bold text-itc-green dark:text-itc-green-bright">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${contactContent.email}`}
                        className="text-itc-slate-muted hover:text-itc-green dark:text-white/70"
                      >
                        {contactContent.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold text-itc-green dark:text-itc-green-bright">Phone</dt>
                    <dd className="text-itc-slate-muted dark:text-white/70">{contactContent.phone}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-itc-green dark:text-itc-green-bright">Working Hours</dt>
                    <dd className="text-itc-slate-muted dark:text-white/70">{contactContent.hours}</dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
