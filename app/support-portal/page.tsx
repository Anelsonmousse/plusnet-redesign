import type { Metadata } from "next";
import Link from "next/link";
import AuthPanel from "@/components/AuthPanel";
import DarkHero from "@/components/DarkHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Help & Support" };

export default function SupportPortal() {
  return (
    <>
      <DarkHero
        label="Selfcare"
        badge="24/7"
        lines={[
          { text: "Customer" },
          { text: "support portal", red: true, indent: "md:pl-[8%]", mark: true },
        ]}
        intro="Log in to manage your account, raise a support ticket or check your subscription."
      />

      <section className="bg-black pb-16 text-white md:pb-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-light text-white/70">[Need help now?]</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-[1] tracking-tight md:text-4xl">
              Our support team
              <br />
              <span className="text-brand">is always on</span>
            </h2>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-white/75 md:text-base">
              Unrivalled phone and online support from our dedicated 24/7
              Support Team – whenever you need it.
            </p>
            <ul className="mt-8 space-y-4 text-lg font-light">
              <li>
                <a href={`tel:${site.phone}`} className="font-semibold hover:text-brand">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand">
                  {site.email}
                </a>
              </li>
            </ul>
            <Link
              href="/frequently-asked-questions"
              className="mt-8 inline-block text-sm font-medium underline underline-offset-4 hover:text-brand"
            >
              Read the FAQ
            </Link>
          </div>
          <AuthPanel />
        </div>
      </section>
    </>
  );
}
