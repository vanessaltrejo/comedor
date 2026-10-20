import { revealDelay } from "@/lib/scrollRevealStyle";

interface PageHeroProps {
  /** Text before the highlighted word, e.g. "Nuestros". */
  titleBefore?: string;
  /** Highlighted (gradient) part of the title. */
  titleHighlight: string;
  /** Text after the highlighted word, e.g. "que nos define". */
  titleAfter?: string;
  subtitle: string;
}

/** Thin banner shared by the inner pages (Nosotros, Comedores, Informe, Contáctanos, Donar). */
export function PageHero({ titleBefore, titleHighlight, titleAfter, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 py-8 text-center sm:px-6 md:py-10 lg:px-10">
        <h1
          className="mb-3 text-[1.875rem] font-black md:text-[2.5rem] scroll-reveal"
          style={revealDelay(100)}
        >
          {titleBefore ? `${titleBefore} ` : null}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
          {titleAfter ? ` ${titleAfter}` : null}
        </h1>
        <p
          className="mx-auto max-w-6xl text-balance text-base leading-relaxed text-purple-100 scroll-reveal"
          style={revealDelay(200)}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
