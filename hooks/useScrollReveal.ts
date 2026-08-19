"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Revela elementos con la clase .scroll-reveal (definida en globals.css)
 * cuando entran al viewport. Se monta desde Footer, que vive en el layout raíz
 * y no se remonta entre navegaciones — por eso el efecto depende de `pathname`:
 * sin eso, solo observaría los elementos de la primera página cargada y las
 * páginas visitadas después (vía <Link>) nunca revelarían su contenido.
 */
export function useScrollReveal(): void {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);
}
