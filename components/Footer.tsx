import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import SocialIcons from "./SocialIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Broadband", href: "/package-guide" },
  { label: "Why Plusnet", href: "/why-plusnet" },
  { label: "Packages Guide", href: "/package-guide" },
  { label: "Selfcare", href: "/support-portal" },
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Contact", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_1.3fr_0.8fr_0.9fr]">
        <div>
          <Link href="/" aria-label="Plusnet home" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="Plusnet"
              width={205}
              height={61}
              className="h-12 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-white/70">
            Unlimited fibre broadband for homes and businesses across Nigeria —
            fast, reliable and always on.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold">Contact Info</h3>
          <ul className="space-y-3 text-sm font-light text-white/80">
            <li>
              <a href={`tel:${site.phone}`} className="font-semibold text-white hover:text-brand">
                {site.phone}
              </a>{" "}
              – Sales/Support
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
            {site.offices.map((o) => (
              <li key={o.city}>
                <span className="font-semibold text-white">{o.city}:</span>
                {o.address}
              </li>
            ))}
          </ul>
          <Link
            href="/contact-us"
            className="mt-6 inline-block rounded-full border-2 border-brand bg-brand px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-transparent"
          >
            Sales Inquiry
          </Link>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold">Follow Us</h3>
          <SocialIcons size="md" />
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm font-light text-white/80">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site py-5 text-center text-xs font-light text-white/60">
          Copyright © {new Date().getFullYear()} {site.name}
        </div>
      </div>
    </footer>
  );
}
