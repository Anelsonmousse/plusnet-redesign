import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Sales inquiries" title="Contact Us" />
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wide text-brand">
                Our Office
              </h2>
              <ul className="mt-3 space-y-3 font-light text-ink/80">
                {site.offices.map((o) => (
                  <li key={o.city}>
                    <span className="font-semibold text-ink">{o.city}:</span>
                    <br />
                    {o.address}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wide text-brand">
                Telephone
              </h2>
              <p className="mt-3 font-light text-ink/80">
                <a href={`tel:${site.phone}`} className="font-semibold text-ink hover:text-brand">
                  {site.phone}
                </a>{" "}
                – Sales/Support
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wide text-brand">
                Email
              </h2>
              <p className="mt-3 font-light">
                <a href={`mailto:${site.email}`} className="hover:text-brand">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
