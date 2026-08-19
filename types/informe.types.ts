/**
 * Ids de las secciones del informe. Son la fuente única compartida entre
 * el contenido (`app/informe/page.tsx`) y el índice lateral
 * (`components/informe/InformeSidebar.tsx`): al estar tipados, renombrar
 * una sección sin actualizar la otra deja de compilar en vez de romper
 * el resaltado del menú en silencio.
 */
export const INFORME_SECTION_IDS = [
  "organizacion",
  "impacto",
  "programas",
  "eventos",
  "mejoras",
  "financiero",
  "reconocimientos",
] as const;

export type InformeSectionId = (typeof INFORME_SECTION_IDS)[number];
