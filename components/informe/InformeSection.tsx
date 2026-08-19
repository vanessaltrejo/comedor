import type { ReactNode } from "react";
import { revealDelay } from "@/lib/scrollRevealStyle";
import type { InformeSectionId } from "@/types/informe.types";

interface InformeSectionProps {
  id: InformeSectionId;
  title: string;
  /** Clase de Font Awesome del icono, p. ej. "fa-users". */
  icon: string;
  /** Clases Tailwind de fondo y color para la caja del icono. */
  iconClasses: string;
  children: ReactNode;
}

/**
 * Envoltura común de cada sección del informe: el ancla para el índice
 * lateral y el encabezado (icono + título) que el diseño repite en las
 * siete secciones.
 */
export function InformeSection({ id, title, icon, iconClasses, children }: InformeSectionProps) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="flex items-center gap-4 mb-6 scroll-reveal" style={revealDelay(100)}>
        <div className={`w-12 h-12 ${iconClasses} rounded-2xl flex items-center justify-center`}>
          <i className={`fas ${icon} text-xl`} aria-hidden="true" />
        </div>
        <h2 className="text-3xl font-black text-purple-900">{title}</h2>
      </div>
      {children}
    </section>
  );
}
