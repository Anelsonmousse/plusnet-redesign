import type { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "mist" | "slate" | "black";
}) {
  const tones = {
    white: "bg-white",
    mist: "bg-mist",
    slate: "bg-slate text-white",
    black: "bg-black text-white",
  };
  return (
    <section className={`${tones[tone]} py-16 md:py-20 ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}
