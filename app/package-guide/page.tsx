import type { Metadata } from "next";
import Link from "next/link";
import DarkCta from "@/components/DarkCta";
import DarkHero from "@/components/DarkHero";
import SectionHeading from "@/components/SectionHeading";
import { installationFee, packages } from "@/lib/site";

export const metadata: Metadata = { title: "Package Guide" };

const included = [
  "Free router and setup",
  "Free .com.ng address and web space",
  "Free 24/7 support",
  "SafeGuard for peace of mind",
];

export default function Packages() {
  return (
    <>
      <DarkHero
        label="Broadband"
        badge="30 days"
        lines={[
          { text: "Unlimited" },
          { text: "broadband", red: true, indent: "md:pl-[8%]" },
          { text: "& fibre packages", mark: true, indent: "md:pl-[3%]" },
        ]}
        intro="From new start-ups to growing enterprises, our flexible, affordable and reliable packages offer all you need to stay connected and competitive. Enjoy a range of connectivity options and unlimited plans."
        tags={included}
        figure
      />

      <section className="bg-black py-16 text-white md:py-24">
        <div className="container-site">
          <SectionHeading
            label="Packages"
            title="Choose your"
            accent="preferred package"
            intro="All packages are valid for 30 days with unlimited data and 24/7 access."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-xl p-6 md:p-7 ${
                  p.featured ? "bg-brand-dark text-white xl:-mt-6" : "bg-white text-ink"
                }`}
              >
                {p.featured && (
                  <span className="mb-4 self-start rounded-md bg-white/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
                    Most popular
                  </span>
                )}
                <p className="text-lg font-medium">{p.name}</p>
                <p
                  className={`mt-4 text-4xl font-extrabold tracking-tight md:text-5xl ${
                    p.featured ? "text-white" : "text-brand-dark"
                  }`}
                >
                  {p.price}
                </p>
                <p className={`text-xs ${p.featured ? "text-white/70" : "text-ink/60"}`}>
                  per month
                </p>
                <p className="mt-6 text-2xl font-extrabold tracking-tight">
                  {p.speed}
                  <span
                    className={`ml-2 text-xs font-medium ${
                      p.featured ? "text-white/70" : "text-ink/60"
                    }`}
                  >
                    avg. download
                  </span>
                </p>
                <ul
                  className={`mt-4 flex-1 space-y-2.5 text-sm font-light leading-relaxed ${
                    p.featured ? "text-white/85" : "text-ink/70"
                  }`}
                >
                  <li>Unlimited data</li>
                  <li>Access policy: 24/7</li>
                  <li>Validity: 30 days</li>
                </ul>
                <Link
                  href="/contact-us"
                  className={`mt-8 block rounded-md py-3 text-center text-xs font-bold uppercase tracking-wider transition-colors ${
                    p.featured
                      ? "bg-white text-black hover:bg-black hover:text-white"
                      : "bg-brand text-white hover:bg-brand-dark"
                  }`}
                >
                  Subscribe
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-light text-white/70">
            One-off installation fee: <span className="font-semibold text-white">{installationFee}</span>.
            All prices are per month, inclusive of unlimited data.
          </p>
        </div>
      </section>

      <DarkCta
        title="Not sure which"
        accent="package fits?"
        actions={[
          { label: "Sales enquiry", href: "/contact-us" },
          { label: "Read the FAQ", href: "/frequently-asked-questions", variant: "red" },
        ]}
      />
    </>
  );
}
