import Link from "next/link";

type Action = { label: string; href: string; variant?: "white" | "red" };

type Props = { title: string; accent: string; actions: Action[] };

export default function DarkCta({ title, accent, actions }: Props) {
  return (
    <section className="border-t border-white/10 bg-black py-16 text-white md:py-20">
      <div className="container-site flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <h2 className="text-3xl font-extrabold uppercase leading-[1] tracking-tight md:text-4xl">
          {title}
          <br />
          <span className="text-brand">{accent}</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {actions.map((a) => (
            <Link
              key={a.href + a.label}
              href={a.href}
              className={`rounded-md px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                a.variant === "red"
                  ? "bg-brand text-white hover:bg-brand-dark"
                  : "bg-white text-black hover:bg-brand hover:text-white"
              }`}
            >
              {a.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
