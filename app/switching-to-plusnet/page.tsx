import type { Metadata } from "next";
import DarkCta from "@/components/DarkCta";
import DarkHero from "@/components/DarkHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Switching to Plusnet" };

const steps = [
  {
    n: "01",
    title: "Pick a package",
    text: "Choose the unlimited broadband or fibre plan that suits your home or business.",
  },
  {
    n: "02",
    title: "Tell us where you are",
    text: "Send us a sales enquiry with your location and we’ll confirm coverage and a setup date.",
    red: true,
  },
  {
    n: "03",
    title: "We handle the rest",
    text: "In most cases you don’t even need to contact your old provider. Switching takes as little as 2 working days.",
  },
];

const perks = [
  "No need to contact your old provider",
  "Free router and setup",
  "Office moves handled by our team",
  "Live in as little as 2 working days",
];

export default function Switching() {
  return (
    <>
      <DarkHero
        label="Switch to Plusnet"
        badge="2 days"
        lines={[
          { text: "Joining Plusnet" },
          { text: "is easy", red: true, indent: "md:pl-[8%]" },
          { text: "and fast", mark: true, indent: "md:pl-[3%]" },
        ]}
        intro="It’s never been easier to move your broadband. You can now switch to Plusnet without any hassle and in most cases you don’t even need to contact your old provider. It’s that simple!"
        tags={["No hassle", "No downtime", "No old-provider calls"]}
        figure
      />

      <section className="bg-black py-16 text-white md:py-24">
        <div className="container-site">
          <SectionHeading
            label="How it works"
            title="Three steps"
            accent="to switching"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className={`rounded-xl p-6 md:p-7 ${
                  s.red ? "bg-brand-dark text-white" : "bg-white text-ink"
                }`}
              >
                <p
                  className={`text-4xl font-extrabold tracking-tight md:text-5xl ${
                    s.red ? "text-white" : "text-brand-dark"
                  }`}
                >
                  {s.n}
                </p>
                <p className="mt-6 text-lg font-medium">{s.title}</p>
                <p
                  className={`mt-2 text-sm font-light leading-relaxed ${
                    s.red ? "text-white/80" : "text-ink/70"
                  }`}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-lg border border-white/15 px-4 py-3 text-sm font-light text-white/85"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                    <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DarkCta
        title="Move to our"
        accent="award-winning broadband"
        actions={[
          { label: "View packages", href: "/package-guide" },
          { label: "Sales enquiry", href: "/contact-us", variant: "red" },
        ]}
      />
    </>
  );
}
