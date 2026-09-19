import Image from "next/image";
import Button from "@/components/Button";
import HomeHero from "@/components/HomeHero";
import NewsletterForm from "@/components/NewsletterForm";
import Section from "@/components/Section";
import WhatWeDo from "@/components/WhatWeDo";

const supportLinks = [
  { label: "Read our FAQ", href: "/frequently-asked-questions" },
  { label: "Read our Blog", href: "/frequently-asked-questions" },
  { label: "Contact Support", href: "/support-portal" },
  { label: "Sales Enquiry", href: "/contact-us" },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <WhatWeDo />

      {/* Newsletter */}
      <section className="bg-slate text-white">
        <div className="container-site flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">Love offers and discounts?</h2>
            <p className="mt-1 font-light text-white/90">Subscribe and save.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      {/* Value / support */}
      <Section tone="mist">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              We don’t
              <br />
              compromise on
              <br />
              value or service.
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-ink/80">
              We continue to lead the way on satisfaction, that’s why our
              customers are more satisfied than those of our competitors.
              Unrivaled phone and on-line support from our dedicated 24/7
              Support Team.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <Button href={l.href} variant="outline" className="w-full text-center">
                    {l.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/support.png"
            alt="Plusnet customer support"
            width={412}
            height={358}
            className="mx-auto w-full max-w-sm"
          />
        </div>
      </Section>

      {/* Network */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Image
            src="/images/network-illustration.png"
            alt="Plusnet network infrastructure"
            width={801}
            height={360}
            className="w-full rounded-xl"
          />
          <div>
            <p className="text-base font-light leading-relaxed text-ink/80">
              At Plusnet; we provide a variety of connectivity options, ranging
              from simple business broadband to dedicated internet access
              solutions and managed MPLS services – giving you a tailored,
              business-grade, ‘always on’ connection – with performance and
              price levels to suit your business, and the scale and capacity to
              grow as you do
            </p>
            <Button href="/our-network" className="mt-8">
              Learn more about our network
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
