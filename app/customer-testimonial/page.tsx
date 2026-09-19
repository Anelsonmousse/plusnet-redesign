import type { Metadata } from "next";
import DarkCta from "@/components/DarkCta";
import DarkHero from "@/components/DarkHero";
import SectionHeading from "@/components/SectionHeading";
import { tornEdge } from "@/lib/torn";

export const metadata: Metadata = { title: "Customer Testimonial" };

const testimonials = [
  {
    name: "Uyime Jackson",
    role: "Plusnet Business customer",
    quote:
      "The right connectivity means your key business applications work smoothly, your staff are better able to communicate, your websites operate brilliantly and you are opened up to a world of possibility in the Cloud.",
  },
  {
    name: "Plusnet customer",
    role: "Lagos",
    quote:
      "The right connectivity means your key business applications work smoothly, your staff are better able to communicate, your websites operate brilliantly and you are opened up to a world of possibility in the Cloud.",
    featured: true,
  },
];

export default function Testimonials() {
  return (
    <>
      <DarkHero
        label="Testimonials"
        lines={[
          { text: "What our" },
          { text: "customers say", red: true, indent: "md:pl-[8%]" },
          { text: "about Plusnet", mark: true, indent: "md:pl-[3%]" },
        ]}
        intro="Real words from the homes and businesses we keep connected."
        figure
      />

      <section className="bg-black py-16 text-white md:py-24">
        <div className="container-site">
          <SectionHeading label="Customer stories" title="In their" accent="own words" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:items-start">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                style={{ clipPath: tornEdge(211 + i * 23) }}
                className={`px-7 pb-9 pt-10 ${
                  t.featured ? "bg-brand-dark text-white lg:-mt-8" : "bg-white text-ink"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-9 w-9 ${t.featured ? "text-white/70" : "text-brand"}`}
                >
                  <path d="M7.2 6C4.9 7.4 3.5 9.6 3.5 12.6V18h6.3v-6.3H6.6c0-1.7.9-3 2.6-3.9L7.2 6zm9.6 0c-2.3 1.4-3.7 3.6-3.7 6.6V18h6.3v-6.3h-3.2c0-1.7.9-3 2.6-3.9L16.8 6z" />
                </svg>
                <blockquote
                  className={`mt-5 text-base font-light leading-relaxed md:text-lg ${
                    t.featured ? "text-white/90" : "text-ink/80"
                  }`}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <p className={`font-extrabold ${t.featured ? "" : "text-brand-dark"}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs ${t.featured ? "text-white/70" : "text-ink/60"}`}>
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <DarkCta
        title="Join them"
        accent="Get connected today"
        actions={[
          { label: "View packages", href: "/package-guide" },
          { label: "Sales enquiry", href: "/contact-us", variant: "red" },
        ]}
      />
    </>
  );
}
