import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

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
  },
  {
    n: "03",
    title: "We handle the rest",
    text: "In most cases you don’t even need to contact your old provider. Switching takes as little as 2 working days.",
  },
];

export default function Switching() {
  return (
    <>
      <PageHero
        eyebrow="Switch to Plusnet"
        title="Joining Plusnet is easy and fast."
        subtitle="It’s never been easier to move your broadband. You can now switch to Plusnet without any hassle and in most cases you don’t even need to contact your old provider. It’s that simple!"
        image="/images/switch.jpg"
      />

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Image
            src="/images/sw.png"
            alt="Switching to Plusnet"
            width={512}
            height={512}
            className="mx-auto w-full max-w-sm"
          />
          <ol className="space-y-8">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="text-4xl font-extrabold text-brand">{s.n}</span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-ink/80">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="slate" className="text-center">
        <h2 className="text-2xl font-extrabold uppercase tracking-wide md:text-3xl">
          Move to our award-winning broadband services
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/package-guide">View packages</Button>
          <Button href="/contact-us" variant="white">
            Sales enquiry
          </Button>
        </div>
      </Section>
    </>
  );
}
