import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { packages } from "@/lib/site";

export const metadata: Metadata = { title: "Package Guide" };

export default function Packages() {
  return (
    <>
      <PageHero
        eyebrow="Broadband"
        title="Unlimited Broadband & Fibre packages"
        subtitle="From new start-ups to growing enterprises, our flexible, affordable and reliable packages offer all you need to stay connected and competitive. Enjoy a range of connectivity options and unlimited plans, a free router and setup, a free .com.ng address and web space. There’s also free 24/7 support and SafeGuard for peace of mind."
      />

      <Section tone="mist">
        <h2 className="text-center text-3xl font-extrabold">
          Choose your preferred package
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl p-8 shadow-sm ${
                p.featured
                  ? "bg-slate text-white ring-4 ring-brand"
                  : "bg-white"
              }`}
            >
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-4 text-4xl font-extrabold text-brand">{p.price}</p>
              <p className={`text-xs ${p.featured ? "text-white/70" : "text-ink/60"}`}>
                per month
              </p>
              <ul
                className={`mt-6 flex-1 space-y-3 text-sm font-light ${
                  p.featured ? "text-white/90" : "text-ink/80"
                }`}
              >
                <li>Validity: 30 days</li>
                <li>Benefit: {p.speed}</li>
                <li>30 days Unlimited Data</li>
                <li>Access Policy: 24/7</li>
              </ul>
              <Link
                href="/contact-us"
                className="mt-8 block rounded-full bg-brand py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
