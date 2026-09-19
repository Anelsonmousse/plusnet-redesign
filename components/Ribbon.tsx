export default function Ribbon({
  tags,
  reverse = false,
  className = "",
}: {
  tags: string[];
  reverse?: boolean;
  className?: string;
}) {
  const row = [...tags, ...tags, ...tags];
  return (
    <div
      aria-hidden
      className={`absolute left-1/2 w-[140vw] -translate-x-1/2 overflow-hidden bg-brand-dark py-3 text-white shadow-lg shadow-black/40 ${className}`}
    >
      <div
        className={`flex w-max animate-marquee gap-12 whitespace-nowrap ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 gap-12 pr-12">
            {row.map((t, i) => (
              <span key={i} className="text-sm font-bold uppercase tracking-wider md:text-base">
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
