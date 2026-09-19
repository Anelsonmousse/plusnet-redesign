// Deterministic pseudo-random so the server and client render identical edges.
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

// Builds a jagged, torn-paper polygon for clip-path.
export function tornEdge(seed: number, step = 3, depth = 1.6) {
  const rnd = seeded(seed);
  const pts: string[] = [];
  const jitter = () => (rnd() - 0.5) * depth * 2;
  for (let x = 0; x <= 100; x += step) pts.push(`${x}% ${Math.max(0, jitter())}%`);
  for (let y = step; y <= 100; y += step) pts.push(`${Math.min(100, 100 + jitter())}% ${y}%`);
  for (let x = 100 - step; x >= 0; x -= step) pts.push(`${x}% ${Math.min(100, 100 + jitter())}%`);
  for (let y = 100 - step; y > 0; y -= step) pts.push(`${Math.max(0, jitter())}% ${y}%`);
  return `polygon(${pts.join(",")})`;
}
