import type { CSSProperties } from "react";

/**
 * Genera el style inline para elementos .scroll-reveal (ver globals.css),
 * que leen la variable --delay para escalonar la animación de entrada.
 */
export function revealDelay(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}
