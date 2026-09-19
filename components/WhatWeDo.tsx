import Image from "next/image";
import Link from "next/link";
import { tornEdge } from "@/lib/torn";

const features = [
  {
    title: "Easy To\nSwitch",
    text: "We’ll make switching provider simple, fast and hassle free, giving you the time to focus on your day-to-day business.",
    href: "/switching-to-plusnet",
  },
  {
    title: "Our\nNetwork",
    text: "One of the most advanced ISP networks in Nigeria. We own and manage our broadband platform, investing heavily in capacity and resilience.",
    href: "/our-network",
    featured: true,
  },
  {
    title: "Unlimited\nBroadband",
    text: "Great-value, unlimited broadband and low-cost fibre packages. Find a deal to suit you.",
    href: "/package-guide",
  },
  {
    title: "Partner\nWith Us",
    text: "Resell our products & services as a Partner or Dealer, or recommend Plusnet to others for monthly referral rewards.",
    href: "/partner-with-us",
  },
];

const edges = [11, 29, 47, 83].map((s) => tornEdge(s));

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-24">
      <div className="container-site">
        {/* Section label + badge */}
        <div className="flex items-start justify-between text-xs font-light text-white/70">
          <span>[What we do]</span>
          <span className="rounded-md border border-white/40 px-1.5 py-1 text-[10px] leading-none tracking-wider">
            24/7
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-4 text-center text-[6.5vw] font-extrabold uppercase leading-[1] tracking-tight sm:text-[5vw] lg:text-[3.4rem]">
          <span className="block">We connect</span>
          <span className="block text-brand md:-translate-x-[12%]">
            Homes and businesses
          </span>
          <span className="block md:-translate-x-[6%]">
            People trust{" "}
            <span className="inline-flex align-middle h-[0.9em] w-[1.6em] items-center justify-center rounded-full bg-brand">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={64}
                height={64}
                className="h-[0.8em] w-[0.8em] brightness-0 invert"
              />
            </span>{" "}
            and
          </span>
          <span className="block text-brand md:translate-x-[10%]">
            Unlimited fibre
          </span>
          <span className="block">They can rely on</span>
        </h2>

        {/* Torn-edge cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.href}
              style={{ clipPath: edges[i] }}
              className={`flex flex-col px-7 pb-8 pt-10 ${
                f.featured
                  ? "bg-brand-dark text-white lg:-mt-10 lg:pb-12"
                  : "bg-white text-ink"
              }`}
            >
              <h3
                className={`whitespace-pre-line text-2xl font-extrabold leading-tight ${
                  f.featured ? "text-white" : "text-brand-dark"
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`mt-5 flex-1 text-sm font-light leading-relaxed ${
                  f.featured ? "text-white/85" : "text-ink/75"
                }`}
              >
                {f.text}
              </p>
              <Link
                href={f.href}
                className={`mt-8 self-center text-sm font-medium underline underline-offset-4 transition-colors ${
                  f.featured ? "hover:text-white/70" : "text-brand-dark hover:text-brand"
                }`}
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
