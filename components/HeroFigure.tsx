/**
 * Central hero figure: a glossy signal tower with glowing brand-red arcs,
 * echoing the arcs in the Plusnet logo. Pure SVG so it stays crisp at any
 * size; swap for a transparent PNG/photo via <Image> if the client supplies one.
 */
export default function HeroFigure({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 900"
      role="img"
      aria-label="Plusnet fibre signal"
      className={className}
    >
      <defs>
        <linearGradient id="tower" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#050505" />
          <stop offset="0.35" stopColor="#1c1c1c" />
          <stop offset="0.5" stopColor="#2a2a2a" />
          <stop offset="0.65" stopColor="#141414" />
          <stop offset="1" stopColor="#030303" />
        </linearGradient>
        <linearGradient id="towerTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3a3a" />
          <stop offset="1" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a1a1a" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e02b20" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#e02b20" stopOpacity="0.12" />
          <stop offset="1" stopColor="#e02b20" stopOpacity="0" />
        </radialGradient>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="softblur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* ambient glow behind the arcs */}
      <ellipse cx="300" cy="330" rx="260" ry="220" fill="url(#glow)" />

      {/* signal arcs */}
      <g fill="none" strokeLinecap="round">
        <g stroke="#e02b20" strokeWidth="26" opacity="0.35" filter="url(#blur)">
          <path d="M120 372 A 230 230 0 0 1 480 372" />
          <path d="M175 420 A 160 160 0 0 1 425 420" />
          <path d="M232 468 A 90 90 0 0 1 368 468" />
        </g>
        <g stroke="#e02b20" strokeWidth="22">
          <path d="M120 372 A 230 230 0 0 1 480 372" opacity="0.55" />
          <path d="M175 420 A 160 160 0 0 1 425 420" opacity="0.8" />
          <path d="M232 468 A 90 90 0 0 1 368 468" />
        </g>
        <g stroke="#ff7a70" strokeWidth="6" opacity="0.7" filter="url(#softblur)">
          <path d="M120 372 A 230 230 0 0 1 480 372" />
          <path d="M175 420 A 160 160 0 0 1 425 420" />
          <path d="M232 468 A 90 90 0 0 1 368 468" />
        </g>
      </g>

      {/* tower */}
      <g>
        <path
          d="M232 900 L232 560 Q232 500 300 500 Q368 500 368 560 L368 900 Z"
          fill="url(#tower)"
        />
        <path
          d="M232 560 Q232 500 300 500 Q368 500 368 560 L368 575 Q300 545 232 575 Z"
          fill="url(#towerTop)"
        />
        {/* highlight edge */}
        <path
          d="M246 900 L246 566 Q246 522 300 516"
          stroke="#4a4a4a"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        {/* status LEDs */}
        {[640, 690, 740, 790].map((y, i) => (
          <g key={y}>
            <rect x="286" y={y} width="28" height="5" rx="2.5" fill="#e02b20" opacity={i === 0 ? 1 : 0.35} />
            {i === 0 && (
              <rect x="280" y={y - 4} width="40" height="13" rx="6" fill="#e02b20" opacity="0.35" filter="url(#softblur)" />
            )}
          </g>
        ))}
        {/* plus mark from the logo */}
        <g fill="#e02b20" opacity="0.9">
          <rect x="294" y="580" width="12" height="40" rx="2" />
          <rect x="280" y="594" width="40" height="12" rx="2" />
        </g>
      </g>

      {/* base */}
      <ellipse cx="300" cy="900" rx="210" ry="30" fill="url(#base)" />
    </svg>
  );
}
