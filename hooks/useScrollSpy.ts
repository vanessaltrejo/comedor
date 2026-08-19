"use client";

import { useEffect, useState } from "react";

/**
 * Devuelve el id de la sección actualmente "activa" según el scroll:
 * la última sección cuyo inicio ya fue rebasado (menos un margen).
 *
 * `sectionIds` debe ser una referencia estable (una constante de módulo);
 * si se pasa un arreglo creado en cada render, el efecto se re-suscribe
 * en cada uno.
 */
export function useScrollSpy(sectionIds: readonly string[], offset = 150): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    let isTicking = false;

    function updateActiveSection(): void {
      let currentId = "";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - offset) {
          currentId = id;
        }
      });

      if (currentId) setActiveId(currentId);
      isTicking = false;
    }

    function handleScroll(): void {
      if (!isTicking) {
        window.requestAnimationFrame(updateActiveSection);
        isTicking = true;
      }
    }

    // passive: el listener nunca llama preventDefault, así el navegador
    // no tiene que esperarlo para hacer scroll.
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
