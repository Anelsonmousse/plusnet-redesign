import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = { title: "Frequently Asked Questions" };

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="Help & Support" title="Frequently Asked Questions (FAQs)" />
      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-black/10">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-transform group-open:rotate-45">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
                    <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="prose-site mt-4 text-sm font-light leading-relaxed text-ink/80">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
