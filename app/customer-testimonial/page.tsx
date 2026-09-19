import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = { title: "Customer Testimonial" };

const testimonials = [
  {
    name: "Uyime Jackson",
    quote:
      "The right connectivity means your key business applications work smoothly, your staff are better able to communicate, your websites operate brilliantly and you are opened up to a world of possibility in the Cloud.",
  },
  {
    name: "Plusnet customer",
    quote:
      "The right connectivity means your key business applications work smoothly, your staff are better able to communicate, your websites operate brilliantly and you are opened up to a world of possibility in the Cloud.",
  },
];

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What our customers say about Plusnet Broadband"
      />
      <Section tone="mist">
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl bg-white p-8 shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-brand">
                <path d="M7.2 6C4.9 7.4 3.5 9.6 3.5 12.6V18h6.3v-6.3H6.6c0-1.7.9-3 2.6-3.9L7.2 6zm9.6 0c-2.3 1.4-3.7 3.6-3.7 6.6V18h6.3v-6.3h-3.2c0-1.7.9-3 2.6-3.9L16.8 6z" />
              </svg>
              <blockquote className="mt-4 font-light leading-relaxed text-ink/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 font-bold">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
