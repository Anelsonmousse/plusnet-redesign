import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = { title: "Partner With Us" };

const partnerBenefits = [
  {
    title: "1. Commercial Flexibility",
    text: "Build a commercial model that works for both you and Plusnet. Generate an additional revenue stream that we can both benefit from.",
  },
  {
    title: "2. Support",
    text: "Stay connected with our specialist 24/7 Partner Support Team who are on hand to help manage and plan connectivity connections, as well as offer everyday support.",
  },
  {
    title: "3. Commitment to Grow",
    text: "Benefit from our continual investment into our reseller programme in order to help support and grow all of our Partners.",
  },
];

export default function Partner() {
  return (
    <>
      <PageHero
        eyebrow="Becoming a partner"
        title="Partner with us"
        subtitle="Grow your business by partnering with Plusnet. We’ve been successfully delivering high-quality, well-supported business and residential connectivity products for over 10 years. All Plusnet products are designed to offer great value, while remaining sustainable in the long term."
      />

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Plusnet Partner · Plusnet Dealer · Plusnet Referrals
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">Plusnet Partner</h2>
            <div className="prose-site mt-5 font-light leading-relaxed text-ink/80">
              <p>
                Take bulk Plusnet Business products or services either for your
                own use, or to resell to other businesses. Plusnet Partner gives
                you a dedicated portal and helpdesk, so you can control your end
                user’s billing and support yourself.
              </p>
              <p>
                Establish a long-term partnership with Plusnet and grow your
                business via our Partner programme. At Plusnet, we can’t help
                but help. If you sign up to become a partner, we’ll help you
                increase your customer base by providing you with the support we
                give to our small businesses.
              </p>
            </div>
          </div>
          <Image
            src="/images/partnership1.png"
            alt="Partner with Plusnet"
            width={512}
            height={512}
            className="mx-auto w-full max-w-sm"
          />
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-8 md:grid-cols-3">
          {partnerBenefits.map((b) => (
            <div key={b.title} className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-brand">{b.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ink/80">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold">Plusnet Referrals</h2>
          <div className="prose-site mt-5 font-light leading-relaxed text-ink/80">
            <p>
              Recommend Plusnet Business to others and we’ll discount your
              monthly bill. You can make as many referrals as you want and we’ll
              keep paying you each month as long as your referred customers
              stay with us.
            </p>
            <p>
              Recommend others to Plusnet Business – we’ll reward you by
              discounting your bill every month they stay with us.
            </p>
          </div>
          <Button href="/contact-us" className="mt-8">
            Start referring
          </Button>
        </div>
      </Section>
    </>
  );
}
