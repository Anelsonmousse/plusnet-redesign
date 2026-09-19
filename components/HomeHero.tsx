import Image from "next/image";
import Link from "next/link";
import HeroFigure from "./HeroFigure";

const tags = ["Fibre", "Unlimited"];
const stats = [
  { value: "10+", label: "Years connecting Nigeria" },
  { value: "24/7", label: "Dedicated support" },
];

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="container-site relative flex flex-col md:min-h-[calc(100svh-6.5rem)]">
        {/* Headline */}
        <div className="pointer-events-none relative z-10 mt-10 select-none md:mt-12">
          <h1 className="whitespace-nowrap text-center font-medium leading-[0.85] tracking-[-0.06em] text-[#d9d9d9]">
            <span className="flex items-center justify-center gap-[0.2em] text-[14.5vw] md:text-[11.5vw]">
              <span className="h-[0.07em] w-[0.45em] shrink-0 rounded-full bg-[#d9d9d9]" />
              the future
              <span className="h-[0.07em] w-[0.45em] shrink-0 rounded-full bg-[#d9d9d9]" />
            </span>
            <span className="-mt-[0.02em] block text-[17vw] text-[#212121] md:pl-[4vw] md:text-left md:text-[13vw]">
              of connectivity
            </span>
          </h1>
        </div>

        {/* Left column: label + description */}
        <div className="relative z-30 mt-10 max-w-xs md:absolute md:left-[6%] md:top-[44%] md:mt-0">
          <p className="text-sm font-medium">Our Rate</p>
          <p className="mt-6 max-w-[15rem] text-sm font-light leading-relaxed text-white/80 md:mt-[24vh]">
            Unlimited fibre broadband that works as fast as your business —
            no caps, no fuss, no limits.
          </p>
        </div>

        {/* Central figure */}
        <div className="pointer-events-none relative z-20 -mb-10 mt-4 flex justify-center md:absolute md:inset-x-0 md:bottom-0 md:mb-0 md:mt-0">
          <HeroFigure className="h-[46svh] w-auto md:h-[80svh]" />
        </div>

        {/* Right column: thumbnail card */}
        <Link
          href="/package-guide"
          aria-label="View our broadband packages"
          className="group absolute right-0 top-[50%] z-30 hidden h-48 w-40 overflow-hidden border border-white/10 bg-[#0a0a0a] md:block"
        >
          <Image
            src="/images/network-illustration.png"
            alt=""
            width={801}
            height={360}
            className="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white ring-1 ring-white/30 transition-transform group-hover:scale-110">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
              <path d="M6 14L14 6M8 6h6v6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>

        {/* Bottom row */}
        <div className="relative z-30 mt-auto flex flex-col gap-6 pb-8 pt-10 md:flex-row md:items-end md:justify-between">
          <ul className="flex flex-wrap gap-3">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium backdrop-blur-sm"
              >
                {t}
              </li>
            ))}
          </ul>
          <dl className="grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((s) => (
              <div
                key={s.value}
                className="flex h-32 w-full flex-col justify-end border border-white/25 bg-black/40 px-6 pb-5 text-right backdrop-blur-sm md:w-56"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-4xl font-light tracking-tight md:text-5xl">{s.value}</dd>
                <dd className="mt-1 text-[11px] font-light uppercase tracking-wider text-white/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
