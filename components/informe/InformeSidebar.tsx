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
    <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start">
      <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4 shadow-xl">
        <h3 className="mb-3 pl-3 text-sm font-black text-brand">Contenido</h3>
        <nav className="flex flex-col gap-1" aria-label="Índice del informe">
          {SIDEBAR_LINKS.map((link) => {
            const isActive = link.id === activeId;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-white text-brand shadow-sm ring-1 ring-purple-100"
                    : "text-gray-600 hover:bg-white/70 hover:text-brand"
                }`}
              >
                <i
                  className={`fas ${link.icon} w-5 text-center ${isActive ? "text-orange-500" : "text-gray-400"}`}
                  aria-hidden="true"
                />
                {link.label}
              </a>
            );
          })}
          <a
            href="/informe/Informe 2025.pdf"
            download="Informe-Anual-2025.pdf"
            className="mt-3 flex w-full items-center justify-center rounded-lg bg-brand px-4 py-3 text-sm font-bold text-white shadow-md shadow-purple-200 transition hover:bg-brand-dark"
          >
            <i className="fas fa-download mr-2" aria-hidden="true" /> Descargar Reporte
          </a>
        </nav>
      </div>
    </aside>
  );
}
