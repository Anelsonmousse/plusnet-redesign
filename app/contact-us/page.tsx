import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import DarkHero from "@/components/DarkHero";
import SectionHeading from "@/components/SectionHeading";
import SocialIcons from "@/components/SocialIcons";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function Contact() {
  return (
    <>
      <DarkHero
        label="Sales inquiries"
        lines={[
          { text: "Let’s get you" },
          { text: "connected", red: true, indent: "md:pl-[8%]", mark: true },
        ]}
        intro="Tell us a little about your home or business and our sales team will get back to you shortly."
      />

      <section className="bg-black pb-16 text-white md:pb-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading label="Reach us" title="Talk to" accent="our team" />
            <dl className="mt-10 space-y-8">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-brand">Telephone</dt>
                <dd className="mt-2 text-lg font-light">
                  <a href={`tel:${site.phone}`} className="font-semibold hover:text-brand">
                    {site.phone}
                  </a>{" "}
                  <span className="text-white/60">– Sales/Support</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-brand">Email</dt>
                <dd className="mt-2 text-lg font-light">
                  <a href={`mailto:${site.email}`} className="hover:text-brand">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-brand">Our offices</dt>
                {site.offices.map((o) => (
                  <dd key={o.city} className="mt-2 font-light text-white/80">
                    <span className="font-semibold text-white">{o.city}:</span> {o.address}
                  </dd>
                ))}
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-brand">Follow us</dt>
                <dd className="mt-3">
                  <SocialIcons size="md" />
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl bg-white p-6 text-ink md:p-8">
            <p className="text-xs font-light text-ink/60">[Send a message]</p>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
