"use client";

import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/data";

// Timings in milliseconds
const TYPE_ROLE = 90; // per character, role
const TYPE_TAGLINE = 28; // per character, tagline
const DELETE = 12; // per character, while erasing
const HOLD_FULL = 2500; // pause once everything is typed
const HOLD_EMPTY = 600; // pause once everything is erased

// Shows the typed part over an invisible copy of the full text, so the layout never jumps.
function Typed({
  text,
  count,
  caret,
}: {
  text: string;
  count: number;
  caret: boolean;
}) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="relative block">
        <span className="invisible">{text}</span>
        <span className="absolute inset-0">
          {text.slice(0, count)}
          {caret && (
            <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] animate-pulse bg-current" />
          )}
        </span>
      </span>
    </>
  );
}

export default function HeroText() {
  const { role, tagline } = PROFILE;
  const total = role.length + tagline.length;

  const [started, setStarted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [pos, setPos] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      setReduced(true);
    const t = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started || reduced) return;
    const atEnd = dir === 1 && pos >= total;
    const atStart = dir === -1 && pos <= 0;
    const delay = atEnd
      ? HOLD_FULL
      : atStart
        ? HOLD_EMPTY
        : dir === -1
          ? DELETE
          : pos < role.length
            ? TYPE_ROLE
            : TYPE_TAGLINE;

    const t = setTimeout(() => {
      if (atEnd) setDir(-1);
      else if (atStart) setDir(1);
      else setPos((p) => p + dir);
    }, delay);
    return () => clearTimeout(t);
  }, [started, reduced, pos, dir, total, role.length]);

  const roleCount = reduced ? role.length : Math.min(pos, role.length);
  const taglineCount = reduced
    ? tagline.length
    : Math.max(0, pos - role.length);
  const showCaret = !reduced && started;

  return (
    <>
      <h1 className="font-head text-6xl font-extrabold leading-[1.05] tracking-tight">
        {PROFILE.name}
        <span className="sr-only">, </span>
        <span className="block text-accent">
          <Typed
            text={role}
            count={roleCount}
            caret={showCaret && pos <= role.length}
          />
        </span>
      </h1>
      <p className="mt-5 max-w-[46ch] text-lg text-muted">
        <Typed
          text={tagline}
          count={taglineCount}
          caret={showCaret && pos > role.length}
        />
      </p>
    </>
  );
}
