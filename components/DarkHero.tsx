import type { ReactNode } from "react";
import HeroFigure from "./HeroFigure";
import MarkPill from "./MarkPill";

export type HeroLine = {
  text: string;
  red?: boolean;
  indent?: string; // Tailwind padding-left class applied from md up, e.g. "md:pl-[8%]"
  mark?: boolean; // append the Plusnet mark pill after the text
};

type Props = {
  label: string;
  badge?: string;
  lines: HeroLine[];
  intro?: ReactNode;
  tags?: string[];
  figure?: boolean;
  children?: ReactNode;
};

export default function DarkHero({
  label,
  badge = "NG",
  lines,
  intro,
  tags,
  figure = false,
  children,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="container-site relative pb-16 pt-10 md:pt-12 lg:pb-20">
        <div className="flex items-start justify-between text-xs font-light text-white/70">
          <span>[{label}]</span>
          <span className="rounded-md border border-white/40 px-1.5 py-1 text-[10px] leading-none tracking-wider">
            {badge}
          </span>
        </div>

        <h1 className="mt-6 text-[9vw] font-extrabold uppercase leading-[1] tracking-tight sm:text-[6.5vw] lg:text-[4.4rem]">
          {lines.map((l) => (
            <span
              key={l.text}
              className={`block ${l.red ? "text-brand" : ""} ${l.indent ?? ""}`}
            >
              {l.text}
              {l.mark && (
                <>
                  {" "}
                  <MarkPill />
                </>
              )}
            </span>
          ))}
        </h1>

        {(intro || tags || children) && (
          <div className={`relative mt-8 md:mt-10 ${figure ? "max-w-xl" : "max-w-2xl"}`}>
            {intro && (
              <p className="text-sm font-light leading-relaxed text-white/80 md:text-base">
                {intro}
              </p>
            )}
            {tags && (
              <ul className="mt-8 flex flex-wrap gap-3">
                {tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/40 px-5 py-2.5 text-xs font-medium backdrop-blur-sm"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
            {children}
          </div>
        )}

        {figure && (
          <div className="pointer-events-none absolute bottom-0 right-[4%] hidden lg:block">
            <div className="absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_at_bottom,rgba(224,43,32,0.28),transparent_65%)]" />
            <HeroFigure className="relative h-[30rem] w-auto" />
          </div>
        )}
      </div>
    </section>
  );
}
