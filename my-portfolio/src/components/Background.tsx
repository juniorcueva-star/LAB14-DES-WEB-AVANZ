// Fondo global: pistas de circuito y código binario en tonos claros.
// Se genera como SVG en el servidor (sin imágenes externas ni JavaScript en el cliente).

// Generador pseudoaleatorio con semilla: el dibujo sale igual en cada render.
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

type Trace = { d: string; end: [number, number]; glow: boolean; delay: number };

// Pistas que salen de un borde y avanzan hacia el centro con quiebres de 45°.
function makeTraces(seed: number, fromLeft: boolean): Trace[] {
  const r = rng(seed);
  const traces: Trace[] = [];
  const W = 1440;
  for (let i = 0; i < 26; i++) {
    let y = 60 + i * 34 + r() * 14;
    let x = fromLeft ? -10 : W + 10;
    const dir = fromLeft ? 1 : -1;
    let d = `M${x.toFixed(0)} ${y.toFixed(0)}`;
    const segments = 2 + Math.floor(r() * 3);
    for (let s = 0; s < segments; s++) {
      x += dir * (60 + r() * 140);
      d += ` H${x.toFixed(0)}`;
      if (s < segments - 1) {
        const bend = (r() > 0.5 ? 1 : -1) * (12 + r() * 22);
        x += dir * Math.abs(bend);
        y += bend;
        d += ` L${x.toFixed(0)} ${y.toFixed(0)}`;
      }
    }
    traces.push({ d, end: [x, y], glow: r() > 0.72, delay: r() * 4 });
  }
  return traces;
}

function makeBits(seed: number) {
  const r = rng(seed);
  const words = ['0101', '1 1', '01 0 1', '00 011', '1 0 1', '0101', '11', '01 0 1 00'];
  return Array.from({ length: 22 }, () => ({
    x: r() * 1440,
    y: 40 + r() * 860,
    text: words[Math.floor(r() * words.length)],
    size: 12 + r() * 22,
    blur: r() > 0.6,
    opacity: 0.12 + r() * 0.2,
  }));
}

const left = makeTraces(7, true);
const right = makeTraces(91, false);
const bits = makeBits(42);

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Luz general: centro más claro para que el contenido se lea bien */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#ffffff_0%,#f3f6f9_45%,#e4ebf2_100%)]" />
      <div className="absolute -top-56 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-sky-200/40 blur-[140px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="fadeL" x1="0" x2="1">
            <stop offset="0" stopColor="#0284c7" stopOpacity="0.55" />
            <stop offset="1" stopColor="#0284c7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fadeR" x1="1" x2="0">
            <stop offset="0" stopColor="#0284c7" stopOpacity="0.55" />
            <stop offset="1" stopColor="#0284c7" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="node">
            <stop offset="0" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
        </defs>

        {/* Código binario de fondo */}
        <g fontFamily="ui-monospace, Consolas, monospace" fill="#0369a1">
          {bits.map((b, i) => (
            <text
              key={i}
              x={b.x.toFixed(0)}
              y={b.y.toFixed(0)}
              fontSize={b.size.toFixed(0)}
              opacity={b.opacity.toFixed(2)}
              filter={b.blur ? 'url(#soft)' : undefined}
              letterSpacing="4"
            >
              {b.text}
            </text>
          ))}
        </g>

        {/* Pistas de circuito */}
        {[
          { list: left, stroke: 'url(#fadeL)' },
          { list: right, stroke: 'url(#fadeR)' },
        ].map(({ list, stroke }, gi) => (
          <g key={gi} fill="none" stroke={stroke} strokeWidth="1.2">
            {list.map((t, i) => (
              <path key={i} d={t.d} />
            ))}
          </g>
        ))}

        {/* Nodos al final de cada pista */}
        {[...left, ...right].map((t, i) => (
          <g key={i}>
            <circle cx={t.end[0].toFixed(0)} cy={t.end[1].toFixed(0)} r="2.6" fill="#0284c7" opacity="0.45" />
            {t.glow && (
              <circle
                className="circuit-pulse"
                cx={t.end[0].toFixed(0)}
                cy={t.end[1].toFixed(0)}
                r="9"
                fill="url(#node)"
                style={{ animationDelay: `${t.delay.toFixed(2)}s` }}
              />
            )}
          </g>
        ))}
      </svg>

      {/* Velo central para dar claridad a la zona de lectura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_45%,rgb(255_255_255/0.75),transparent_75%)]" />
    </div>
  );
}
