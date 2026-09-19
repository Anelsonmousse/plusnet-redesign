import type { ReactNode } from "react";

type Props = {
  label: string;
  title: string;
  accent: string;
  tail?: string;
  intro?: ReactNode;
  className?: string;
};

// Bracketed label + stacked uppercase heading with a red middle line.
export default function SectionHeading({ label, title, accent, tail, intro, className = "" }: Props) {
  return (
    <div className={className}>
      <p className="text-xs font-light text-white/70">[{label}]</p>
      <h2 className="mt-4 text-3xl font-extrabold uppercase leading-[1] tracking-tight md:text-4xl">
        {title}
        <br />
        <span className="text-brand">{accent}</span>
        {tail && (
          <>
            <br />
            {tail}
          </>
        )}
      </h2>
      {intro && (
        <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-white/75 md:text-base">
          {intro}
        </p>
      )}
    </div>
  );
}
