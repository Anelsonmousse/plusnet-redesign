import { site } from "@/lib/site";

const icons = {
  facebook: (
    <path d="M14 8h-2c-.6 0-1 .4-1 1v2h3l-.4 3H11v8H8v-8H6v-3h2V8.5C8 6.6 9.3 5 11.5 5H14v3z" />
  ),
  twitter: (
    <path d="M18.9 7.2c.7-.4 1.2-1.1 1.4-1.9-.7.4-1.4.7-2.2.8a3.4 3.4 0 0 0-5.9 3.1A9.7 9.7 0 0 1 5.1 5.6a3.4 3.4 0 0 0 1 4.6c-.5 0-1.1-.2-1.5-.4 0 1.7 1.2 3.1 2.7 3.4-.5.1-1 .2-1.5.1.4 1.3 1.7 2.3 3.2 2.4A6.9 6.9 0 0 1 4 17.1 9.7 9.7 0 0 0 9.2 18.6c6.3 0 9.7-5.2 9.7-9.7v-.4c.7-.5 1.3-1.1 1.7-1.8-.6.3-1.3.5-1.7.5z" />
  ),
  instagram: (
    <>
      <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      <circle cx="16.8" cy="7.2" r="1.1" />
      <path d="M16.5 4h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4zm1.9 12.5c0 1-.9 1.9-1.9 1.9h-9c-1 0-1.9-.9-1.9-1.9v-9c0-1 .9-1.9 1.9-1.9h9c1 0 1.9.9 1.9 1.9v9z" />
    </>
  ),
};

export default function SocialIcons({
  size = "sm",
}: {
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "h-5 w-5" : "h-9 w-9";
  const svg = size === "sm" ? "h-3 w-3" : "h-5 w-5";
  return (
    <ul className="flex items-center gap-2">
      {(Object.keys(icons) as Array<keyof typeof icons>).map((k) => (
        <li key={k}>
          <a
            href={site.social[k]}
            target="_blank"
            rel="noreferrer"
            aria-label={`Follow on ${k}`}
            className={`${box} flex items-center justify-center rounded-full bg-slate text-white transition-colors hover:bg-brand`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className={svg}>
              {icons[k]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
