import HeroFigure from "./HeroFigure";

const tags = ["Fibre", "Unlimited"];
const stats = [
  { value: "10+", label: "Years connecting Nigeria" },
  { value: "24/7", label: "Dedicated support" },
];

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="container-site relative flex flex-col md:min-h-[calc(92svh-5.25rem)]">
        {/* Headline */}
        <div className="pointer-events-none relative z-10 mt-8 select-none md:mt-8">
          <h1 className="whitespace-nowrap text-center font-medium leading-[0.85] tracking-[-0.06em] text-[#d9d9d9]">
            <span className="flex items-center justify-center gap-[0.2em] text-[10vw] md:text-[7vw]">
              <span className="h-[0.07em] w-[0.45em] shrink-0 rounded-full bg-[#d9d9d9]" />
              the future
              <span className="h-[0.07em] w-[0.45em] shrink-0 rounded-full bg-[#d9d9d9]" />
            </span>
            <span className="-mt-[0.02em] block text-[10vw] text-[#212121] md:text-[8.5vw]">
              of connectivity
            </span>
          </h1>
        </div>

        {/* Left column: label + description */}
        <div className="relative z-30 mt-10 max-w-xs md:absolute md:left-[6%] md:top-[40%] md:mt-0">
          <p className="text-xs font-medium">Our Rate</p>
          <p className="mt-4 max-w-[13rem] text-xs font-light leading-relaxed text-white/80 md:mt-[18vh]">
            Unlimited fibre broadband that works as fast as your business —
            no caps, no fuss, no limits.
          </p>
        </div>

        {/* Central figure */}
        <div className="pointer-events-none relative z-20 -mb-10 mt-4 flex justify-center md:absolute md:inset-x-0 md:bottom-0 md:mb-0 md:mt-0">
          <HeroFigure className="h-[38svh] w-auto md:h-[66svh]" />
        </div>

        {/* Bottom row */}
        <div className="relative z-30 mt-auto flex flex-col gap-5 pb-6 pt-8 md:flex-row md:items-end md:justify-between">
          <ul className="flex flex-wrap gap-3">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/40 px-5 py-2.5 text-xs font-medium backdrop-blur-sm"
              >
                {t}
              </li>
            ))}
          </ul>
          <dl className="grid grid-cols-2 gap-3 md:gap-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="flex h-20 w-full flex-col justify-end border border-white/25 bg-black/40 px-3 pb-3 text-right backdrop-blur-sm md:w-32"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-light tracking-tight md:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-[8px] font-light uppercase tracking-wider text-white/60">
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
