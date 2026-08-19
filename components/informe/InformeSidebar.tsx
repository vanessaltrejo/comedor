"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { INFORME_SECTION_IDS, type InformeSectionId } from "@/types/informe.types";

interface SidebarLink {
  id: InformeSectionId;
  label: string;
  icon: string;
}

const SIDEBAR_LINKS: SidebarLink[] = [
  { id: "organizacion", label: "Organización", icon: "fa-sitemap" },
  { id: "impacto", label: "Impacto", icon: "fa-chart-pie" },
  { id: "programas", label: "Programas de Apoyo", icon: "fa-hand-holding-heart" },
  { id: "eventos", label: "Eventos", icon: "fa-calendar-alt" },
  { id: "mejoras", label: "Mantenimiento", icon: "fa-tools" },
  { id: "financiero", label: "Transparencia", icon: "fa-coins" },
  { id: "reconocimientos", label: "Reconocimientos", icon: "fa-award" },
];

export function InformeSidebar() {
  const activeId = useScrollSpy(INFORME_SECTION_IDS);

  return (
    <aside className="hidden lg:block lg:col-span-3 sticky top-32 self-start">
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-purple-900 font-black text-xs uppercase tracking-widest mb-6 pl-4">
          Contenido
        </h3>
        <nav className="flex flex-col space-y-1" aria-label="Índice del informe">
          {SIDEBAR_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={link.id === activeId ? "true" : undefined}
              className={`sidebar-item p-4 text-sm font-bold rounded-xl flex items-center gap-3 ${
                link.id === activeId ? "active" : "hover:bg-gray-50"
              }`}
            >
              <i className={`fas ${link.icon} w-5`} aria-hidden="true" /> {link.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-gray-100">
            <a
              href="/informe/Informe 2025.pdf"
              download="Informe-Anual-2025.pdf"
              className="flex items-center justify-center w-full px-4 py-3 bg-purple-600 text-white rounded-xl font-bold text-sm hover:bg-purple-700 transition shadow-md shadow-purple-200"
            >
              <i className="fas fa-download mr-2" aria-hidden="true" /> Descargar Reporte
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
