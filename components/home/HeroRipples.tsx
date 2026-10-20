import type { CSSProperties } from "react";

const RIPPLE_COUNT = 5;
/** Seconds one ring needs to be born, expand and fade out. */
const CYCLE_SECONDS = 10;

interface RippleStyle extends CSSProperties {
  "--delay": string;
  "--static-scale": number;
}

function rippleStyle(index: number): RippleStyle {
  return {
    // Negative delays: the rings are already at different stages on first paint.
    "--delay": `${-(index * CYCLE_SECONDS) / RIPPLE_COUNT}s`,
    // Only used with "reduce motion": a still set of rings of growing size.
    "--static-scale": (index + 1) / RIPPLE_COUNT,
  };
}

/** Concentric rings that are born as a tiny circle and keep expanding outwards. Pure CSS. */
export function HeroRipples() {
  return (
    <div className="hero-ripples" aria-hidden="true">
      {Array.from({ length: RIPPLE_COUNT }, (_, index) => (
        <span key={index} style={rippleStyle(index)} />
      ))}
    </div>
  );
}
