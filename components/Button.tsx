import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "white";
  className?: string;
};

const styles = {
  primary:
    "bg-brand text-white border-brand hover:bg-brand-dark hover:border-brand-dark",
  outline:
    "bg-transparent text-brand border-brand hover:bg-brand hover:text-white",
  white:
    "bg-white text-ink border-white hover:bg-brand hover:text-white hover:border-brand",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full border-2 px-7 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
