import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = { title: "Why Plusnet" };

const reasons = [
  {
    title: "Established provider",
    icon: "/images/stamp.png",
    text: "Reliable, affordable business-class fibre and broadband – from a home-grown provider with a 19 year history. We started small ourselves and have experienced many of the technology challenges a growing company faces – we’re on your side! Our packages are designed to meet your needs, delivering great-value and reliable performance.",
  },
  {
    title: "24/7 dedicated support",
    icon: "/images/customer-care.png",
    text: "We pride ourselves on our personal touch and understand that running a business is a round the clock job. Rest easy, knowing that our Support Team will always be here if you need them, allowing you to focus on your company’s priorities.",
  },
  {
    title: "Advanced network",
    icon: "/images/network-pc.png",
    text: "One of Nigeria’s most advanced ISP networks – delivering speed, reliability and flexibility. Unlike many other providers, we own, invest in and manage our broadband platform too. The end result? We can offer you a far more scalable service than our competitors can.",
  },
  {
    title: "Easy to switch",
    icon: "/images/switch1.png",
    text: "Whether you’re thinking of switching to Plusnet, or moving premises, we’ll make things simple. Switching is easier than ever now and takes as little as 2 working days. Planning an office move? Our dedicated team can take care of relocating your broadband and phone services quickly and smoothly.",
  },
  {
    title: "Dealer and Partner",
    icon: "/images/partnership1.png",
    text: "Opportunities to grow your business and save money – our bespoke Dealer and Partner schemes allow you to form a partnership with Plusnet and resell our range of services to your clients. What’s more, with our Referrals programme the more people you refer to Plusnet, the more we’ll discount your monthly bill.",
  },
  {
    title: "Great value broadband",
    icon: "/images/rocket.png",
    text: "Cost effective unlimited broadband and our superfast fibre – perfect to get your business started.",
  },
];

export default function WhyPlusnet() {
  return (
    <>
      <PageHero
        eyebrow="Why choose Plusnet"
        title="Every business deserves to pay a fair price and still get dedicated customer support."
        subtitle="It’s a promise we stick to, because we’re passionate about high speed broadband. The bottom line is, we understand how crucial it is to running an effective business – keeping you competitive and giving you happy customers. No matter whether you’re an SME, an NGO, a multinational or a government agency, we’ll deliver the same great service."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-black/5 p-8 shadow-sm">
              <Image src={r.icon} alt="" width={72} height={72} className="h-16 w-16" />
              <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ink/80">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide">
          Our YouTube channel
        </h2>
        <div className="mx-auto mt-8 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-lg">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/Caht9FEAtj0"
            title="Plusnet on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Section>
    </>
  );
}
