import HomeHero from "@/components/HomeHero";
import NewsletterForm from "@/components/NewsletterForm";
import Results from "@/components/Results";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <HomeHero />

      <WhatWeDo />

      {/* Newsletter */}
      <section className="bg-slate text-white">
        <div className="container-site flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">Love offers and discounts?</h2>
            <p className="mt-1 font-light text-white/90">Subscribe and save.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <Results />
    </>
  );
}
