import type { Metadata } from "next";
import Image from "next/image";
import DarkCta from "@/components/DarkCta";
import DarkHero from "@/components/DarkHero";
import SectionHeading from "@/components/SectionHeading";
import TornCard from "@/components/TornCard";

export const metadata: Metadata = { title: "Why Plusnet" };

const reasons = [
  {
    title: "Established\nprovider",
    icon: "/images/stamp.png",
    text: "Reliable, affordable business-class fibre and broadband – from a home-grown provider with a 19 year history. We started small ourselves and have experienced many of the technology challenges a growing company faces – we’re on your side! Our packages are designed to meet your needs, delivering great value and reliable performance.",
  },
  {
    title: "24/7 dedicated\nsupport",
    icon: "/images/customer-care.png",
    text: "We pride ourselves on our personal touch and understand that running a business is a round-the-clock job. Rest easy, knowing that our Support Team will always be here if you need them, allowing you to focus on your company’s priorities.",
    featured: true,
  },
  {
    title: "Advanced\nnetwork",
    icon: "/images/network-pc.png",
    text: "One of Nigeria’s most advanced ISP networks – delivering speed, reliability and flexibility. Unlike many other providers, we own, invest in and manage our broadband platform too. The end result? We can offer you a far more scalable service than our competitors can.",
  },
  {
    title: "Easy to\nswitch",
    icon: "/images/switch1.png",
    text: "Whether you’re thinking of switching to Plusnet, or moving premises, we’ll make things simple. Switching takes as little as 2 working days. Planning an office move? Our dedicated team can take care of relocating your broadband and phone services quickly and smoothly.",
  },
  {
    title: "Dealer and\nPartner",
    icon: "/images/partnership1.png",
    text: "Opportunities to grow your business and save money – our bespoke Dealer and Partner schemes let you resell our range of services to your clients. What’s more, with our Referrals programme the more people you refer to Plusnet, the more we’ll discount your monthly bill.",
  },
  {
    title: "Great value\nbroadband",
    icon: "/images/rocket.png",
    text: "Cost-effective unlimited broadband and our superfast fibre – perfect to get your business started.",
    featured: true,
  },
];

export default function WhyPlusnet() {
  return (
    <>
      <DarkHero
        label="Why Plusnet"
        badge="24/7"
        lines={[
          { text: "A fair price" },
          { text: "and dedicated", red: true, indent: "md:pl-[8%]" },
          { text: "support", mark: true, indent: "md:pl-[3%]" },
          { text: "every time", red: true, indent: "md:pl-[14%]" },
        ]}
        intro="It’s a promise we stick to, because we’re passionate about high speed broadband. We understand how crucial it is to running an effective business – keeping you competitive and giving you happy customers. No matter whether you’re an SME, an NGO, a multinational or a government agency, we’ll deliver the same great service."
        tags={["SMEs", "NGOs", "Multinationals", "Government"]}
        figure
      />

      <section className="bg-black py-16 text-white md:py-24">
        <div className="container-site">
          <SectionHeading
            label="Six reasons"
            title="Why businesses"
            accent="choose Plusnet"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <TornCard
                key={r.title}
                seed={101 + i * 17}
                title={r.title}
                text={r.text}
                featured={r.featured}
                icon={
                  <Image
                    src={r.icon}
                    alt=""
                    width={72}
                    height={72}
                    className={`h-12 w-12 ${r.featured ? "brightness-0 invert" : ""}`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-16 text-white md:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <SectionHeading
            label="Watch"
            title="Plusnet"
            accent="on YouTube"
            intro="See how we keep homes and businesses across Nigeria connected."
          />
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-lg shadow-black/40">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/Caht9FEAtj0"
              title="Plusnet on YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <DarkCta
        title="Ready to switch?"
        accent="It takes 2 working days"
        actions={[
          { label: "How to switch", href: "/switching-to-plusnet" },
          { label: "Sales enquiry", href: "/contact-us", variant: "red" },
        ]}
      />
    </>
  );
}
