type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/images/hero.jpg",
}: Props) {
  return (
    <section
      className="relative bg-slate bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container-site relative py-20 md:py-28">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-extrabold uppercase leading-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/90 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
