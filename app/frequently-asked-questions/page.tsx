import type { Metadata } from "next";
import DarkCta from "@/components/DarkCta";
import DarkHero from "@/components/DarkHero";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = { title: "Frequently Asked Questions" };

export default function FaqPage() {
  return (
    <>
      <DarkHero
        label="Help & Support"
        badge="FAQ"
        lines={[
          { text: "Frequently" },
          { text: "asked questions", red: true, indent: "md:pl-[8%]", mark: true },
        ]}
        intro="Quick answers to the things people ask us most. Can’t find what you need? Our support team is available 24/7."
      />

      <section className="bg-black pb-16 text-white md:pb-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold marker:hidden md:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-bold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-transform group-open:rotate-45">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
                      <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="prose-site mt-4 pl-9 text-sm font-light leading-relaxed text-white/75">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <DarkCta
        title="Still have"
        accent="a question?"
        actions={[
          { label: "Contact support", href: "/support-portal" },
          { label: "Sales enquiry", href: "/contact-us", variant: "red" },
        ]}
      />
    </>
  );
}
