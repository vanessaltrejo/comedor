import type { ReactNode } from "react";
import { revealDelay } from "@/lib/scrollRevealStyle";
import type { InformeSectionId } from "@/types/informe.types";

interface InformeSectionProps {
  id: InformeSectionId;
  title: string;
  /** Clase de Font Awesome del icono, p. ej. "fa-users". */
  icon: string;
  /** Clase Tailwind de color de texto del icono, p. ej. "text-brand". */
  iconColorClass: string;
  children: ReactNode;
}

/**
 * Envoltura común de cada sección del informe: el ancla para el índice
 * lateral y el encabezado (icono + título) que el diseño repite en las
 * siete secciones.
 */
export function InformeSection({ id, title, icon, iconColorClass, children }: InformeSectionProps) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="mb-5 flex items-center gap-3 scroll-reveal" style={revealDelay(100)}>
        <i className={`pillar-icon fas ${icon} text-3xl ${iconColorClass}`} aria-hidden="true" />
        <h2 className="text-3xl font-black text-brand">{title}</h2>
      </div>
      {children}
    </section>
  );
}
