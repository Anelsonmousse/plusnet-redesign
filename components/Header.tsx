"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import SocialIcons from "./SocialIcons";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`h-3 w-3 ${className}`}
    >
      <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 text-white transition-[padding] duration-300 ${
        scrolled ? "px-3 pt-3 md:px-5" : "bg-black shadow-md"
      }`}
    >
      {/* Top contact bar — collapses once the page is scrolled */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          scrolled ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
        }`}
      >
        <div className="container-wide flex min-h-0 items-center justify-between gap-4 overflow-hidden border-b border-white/10 py-1.5 text-[11px] font-light">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 hover:text-brand"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-3.5 w-3.5 text-slate"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <span>{site.email}</span>
            </a>
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-2 hover:text-brand"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-3.5 w-3.5 text-slate"
              >
                <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
              <span>{site.phone}</span>
            </a>
          </div>
          <SocialIcons />
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-black/85 shadow-lg shadow-black/40 backdrop-blur-md"
            : ""
        }`}
      >
        <div
          className={`flex items-center justify-between gap-6 transition-[padding] duration-300 ${
            scrolled ? "px-4 py-4 md:px-6" : "container-wide py-2"
          }`}
        >
          <Link href="/" className="shrink-0" aria-label="Plusnet home">
            <Image
              src="/images/logo.png"
              alt="Plusnet"
              width={1200}
              height={536}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-8 lg:flex"
            aria-label="Main"
          >
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    item.children?.some((c) => c.href === pathname);
              return (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1.5 py-2 text-[13px] font-normal tracking-tight transition-colors hover:text-white ${
                      active ? "text-white" : "text-white/80"
                    }`}
                  >
                    {item.label}
                    {item.children && <Chevron className="opacity-60" />}
                    <span
                      className={`absolute -bottom-0.5 left-1/2 h-px w-8 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_10px_2px_rgba(224,43,32,0.7)] transition-opacity ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="min-w-56 border-t-[3px] border-brand bg-black py-2 shadow-xl">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link
                              href={c.href}
                              className="block px-5 py-2.5 text-sm text-white/90 hover:bg-white/5 hover:text-brand"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <Link
            href="/support-portal"
            className="hidden rounded-md bg-white px-7 py-2.5 text-xs font-medium text-black transition-colors hover:bg-brand hover:text-white lg:block"
          >
            Login
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:text-brand lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        <div
          id="mobile-nav"
          hidden={!open}
          className={`border-t border-white/10 bg-black lg:hidden ${
            scrolled ? "rounded-b-2xl" : ""
          }`}
        >
          <ul className="container-wide py-2">
            {nav.map((item) => (
              <li
                key={item.label}
                className="border-b border-white/10 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-semibold uppercase tracking-wide hover:text-brand"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Expand ${item.label}`}
                      aria-expanded={expanded === item.label}
                      onClick={() =>
                        setExpanded((e) =>
                          e === item.label ? null : item.label,
                        )
                      }
                      className="p-3"
                    >
                      <Chevron
                        className={`transition-transform ${
                          expanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && expanded === item.label && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-xs font-medium uppercase tracking-wide text-white/80 hover:text-brand"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
