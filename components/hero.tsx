"use client";
import { useState } from "react";
import { HERO_CHART } from "@/lib/data";

export default function HeroChart() {
  const [active, setActive] = useState<number | null>(null);
  const W = 320,
    H = 180,
    pad = 8,
    gap = 8;
  const n = HERO_CHART.length;
  const max = Math.max(...HERO_CHART.map((d) => d.v));
  const bw = (W - pad * 2) / n;
  const cap =
    active === null
      ? "Hover a bar"
      : `${HERO_CHART[active].label}: ${HERO_CHART[active].v}`;

  return (
    <figure
      className="rounded-2xl border border-line bg-panel px-5 pb-3.5 pt-5"
      aria-label="Decorative bar chart"
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        className="block h-auto w-full text-muted"
        onMouseLeave={() => setActive(null)}
      >
        {HERO_CHART.map((d, i) => {
          const h = (d.v / max) * (H - 28);
          const x = pad + i * bw + gap / 2;
          return (
            <g key={d.label}>
              <rect
                x={x}
                y={H - 20 - h}
                width={bw - gap}
                height={h}
                rx="4"
                tabIndex={0}
                className={`transition-colors hover:fill-accent focus:fill-accent ${i === n - 1 ? "fill-accent" : "fill-bar"}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              />
              <text
                x={x + (bw - gap) / 2}
                y={H - 5}
                textAnchor="middle"
                fontSize="10"
                fill="currentColor"
                opacity=".7"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 min-h-[1.4em] text-sm text-muted">
        {cap}
      </figcaption>
    </figure>
  );
}
