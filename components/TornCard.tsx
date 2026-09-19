import Link from "next/link";
import type { ReactNode } from "react";
import { tornEdge } from "@/lib/torn";

type Props = {
  seed: number;
  title: string;
  text: string;
  featured?: boolean;
  icon?: ReactNode;
  cta?: { label: string; href: string };
  raise?: boolean; // lift the card above its neighbours on large screens
};

export default function TornCard({ seed, title, text, featured, icon, cta, raise }: Props) {
  return (
    <div
      style={{ clipPath: tornEdge(seed) }}
      className={`flex flex-col px-6 pb-8 pt-9 ${
        featured ? "bg-brand-dark text-white" : "bg-white text-ink"
      } ${raise ? "lg:-mt-8 lg:pb-12" : ""}`}
    >
      {icon && <div className="mb-5">{icon}</div>}
      <h3
        className={`whitespace-pre-line text-xl font-extrabold leading-tight ${
          featured ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-4 flex-1 text-sm font-light leading-relaxed ${
          featured ? "text-white/85" : "text-ink/75"
        }`}
      >
        {text}
      </p>
      {cta && (
        <Link
          href={cta.href}
          className={`mt-6 self-start text-sm font-medium underline underline-offset-4 transition-colors ${
            featured ? "hover:text-white/70" : "text-brand-dark hover:text-brand"
          }`}
        >
          {cta.label}
        </Link>
      )}
    </div>
  );
}
