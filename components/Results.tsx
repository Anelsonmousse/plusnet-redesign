import Link from "next/link";
import HeroFigure from "./HeroFigure";
import Ribbon from "./Ribbon";

const ribbonTags = [
  "Unlimited Fibre",
  "Business Broadband",
  "Dedicated Internet",
  "Managed MPLS",
  "24/7 Support",
];

const stats = [
  {
    value: "10+",
    label: "Years in Nigeria",
    text: "Connecting homes and businesses across Abuja, Lagos and beyond with fibre built to last.",
  },
  {
    value: "99.9%",
    label: "Network Uptime",
    text: "We own and manage our broadband platform, investing heavily in capacity and resilience.",
  },
  {
    value: "24/7",
    label: "Dedicated Support",
    text: "Unrivalled phone and online support from our dedicated team — whenever you need it.",
    tone: "red",
  },
  {
    value: "0",
    label: "Data Caps",
    text: "Truly unlimited packages. No caps, no fair-use throttling, no surprises on your bill.",
  },
  {
    value: "100%",
    label: "Business-Grade Connectivity",
    text: "From simple business broadband to dedicated internet access and managed MPLS — a tailored, always-on connection with the performance, price and capacity to grow as you do.",
    tone: "red",
    wide: true,
  },
];

const links = [
  { label: "Read our FAQ", href: "/frequently-asked-questions" },
  { label: "Contact Support", href: "/support-portal" },
  { label: "Sales Enquiry", href: "/contact-us" },
  { label: "Our Network", href: "/our-network" },
];

export default function Results() {
  return (
    <section className="relative isolate overflow-hidden bg-black pb-16 pt-14 text-white md:pb-24 md:pt-20">
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden text-center text-[26vw] font-black leading-[0.8] tracking-tighter text-white/[0.03]"
      >
        PLUS+
      </div>

      {/* Headline + ribbons */}
      <div className="relative">
        <h2 className="relative z-10 text-center text-[16vw] font-black uppercase leading-[0.85] tracking-tight sm:text-[12vw] lg:text-[8.5rem]">
          Our
          <br />
          Results
        </h2>
        <Ribbon tags={ribbonTags} className="top-1/2 z-20 -translate-y-1/2 -rotate-[5deg]" />
        <Ribbon tags={ribbonTags} reverse className="top-1/2 z-20 -translate-y-1/2 rotate-[5deg]" />
      </div>

      {/* Figure + stat cards */}
      <div className="container-site relative mt-14 grid gap-10 md:mt-20 lg:grid-cols-[1fr_2.2fr] lg:items-end">
        <div className="pointer-events-none relative hidden lg:block">
          <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(224,43,32,0.28),transparent_65%)]" />
          <HeroFigure className="relative -mb-16 h-[34rem] w-auto" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`flex flex-col rounded-xl p-6 md:p-7 ${
                s.wide ? "sm:col-span-2" : ""
              } ${
                s.tone === "red"
                  ? "bg-brand-dark text-white"
                  : "bg-white text-ink"
              }`}
            >
              <p
                className={`text-4xl font-extrabold tracking-tight md:text-5xl ${
                  s.tone === "red" ? "text-white" : "text-brand-dark"
                }`}
              >
                {s.value}
              </p>
              <p className="mt-6 text-lg font-medium">{s.label}</p>
              <p
                className={`mt-2 text-sm font-light leading-relaxed ${
                  s.tone === "red" ? "text-white/80" : "text-ink/70"
                }`}
              >
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <ul className="container-site relative mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-wider lg:justify-end">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="border-b border-brand pb-1 text-white/90 transition-colors hover:text-brand"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
