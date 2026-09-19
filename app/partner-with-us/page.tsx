import type { Metadata } from "next";
import Link from "next/link";
import DarkCta from "@/components/DarkCta";
import DarkHero from "@/components/DarkHero";
import SectionHeading from "@/components/SectionHeading";
import TornCard from "@/components/TornCard";

export const metadata: Metadata = { title: "Partner With Us" };

const partnerBenefits = [
  {
    title: "Commercial\nflexibility",
    text: "Build a commercial model that works for both you and Plusnet. Generate an additional revenue stream that we can both benefit from.",
  },
  {
    title: "24/7 partner\nsupport",
    text: "Stay connected with our specialist 24/7 Partner Support Team who are on hand to help manage and plan connectivity connections, as well as offer everyday support.",
    featured: true,
  },
  {
    title: "Commitment\nto grow",
    text: "Benefit from our continual investment into our reseller programme in order to help support and grow all of our Partners.",
  },
];

export default function Partner() {
  return (
    <>
      <DarkHero
        label="Becoming a partner"
        badge="10+ yrs"
        lines={[
          { text: "Grow your" },
          { text: "business", red: true, indent: "md:pl-[8%]" },
          { text: "with Plusnet", mark: true, indent: "md:pl-[3%]" },
        ]}
        intro="We’ve been successfully delivering high-quality, well-supported business and residential connectivity products for over 10 years. All Plusnet products are designed to offer great value, while remaining sustainable in the long term."
        tags={["Plusnet Partner", "Plusnet Dealer", "Plusnet Referrals"]}
        figure
      />

      {/* Plusnet Partner */}
      <section className="bg-black py-16 text-white md:py-24">
        <div className="container-site">
          <SectionHeading
            label="Plusnet Partner"
            title="Resell our"
            accent="products & services"
            intro={
              <>
                Take bulk Plusnet Business products or services either for your
                own use, or to resell to other businesses. Plusnet Partner gives
                you a dedicated portal and helpdesk, so you can control your end
                user’s billing and support yourself.
                <br />
                <br />
                Establish a long-term partnership with Plusnet and grow your
                business via our Partner programme. At Plusnet, we can’t help
                but help. If you sign up to become a partner, we’ll help you
                increase your customer base by providing you with the support we
                give to our small businesses.
              </>
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16">
            {partnerBenefits.map((b, i) => (
              <TornCard
                key={b.title}
                seed={307 + i * 19}
                title={b.title}
                text={b.text}
                featured={b.featured}
                raise={b.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Referrals */}
      <section className="bg-black pb-16 text-white md:pb-24">
        <div className="container-site">
          <div className="grid gap-8 rounded-xl bg-brand-dark p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <p className="text-xs font-light text-white/70">[Plusnet Referrals]</p>
              <h2 className="mt-4 text-3xl font-extrabold uppercase leading-[1] tracking-tight md:text-4xl">
                Refer others.
                <br />
                Pay less every month.
              </h2>
              <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-white/85 md:text-base">
                Recommend Plusnet Business to others and we’ll discount your
                monthly bill. You can make as many referrals as you want and
                we’ll keep paying you each month as long as your referred
                customers stay with us.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="justify-self-start rounded-md bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white md:justify-self-end"
            >
              Start referring
            </Link>
          </div>
        </div>
      </section>

      <DarkCta
        title="Become a"
        accent="Plusnet partner"
        actions={[{ label: "Talk to us", href: "/contact-us" }]}
      />
    </>
  );
}
