import type { Metadata } from "next";
import { ComedoresTabs } from "@/components/comedores/ComedoresTabs";
import { COMEDORES } from "@/services/data/comedores.data";
import { PageHero } from "@/components/layout/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Nuestros comedores en Nuevo León",
  description:
    "Conoce las 4 sedes del Comedor de los Pobres: Escobedo, García, Guadalupe y Juárez. Dirección, mapa y galería de cada comedor en Nuevo León.",
  path: "/comedores",
});

export default function Comedores() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <PageHero
        titleBefore="Nuestros"
        titleHighlight="Comedores"
        subtitle="Conoce las sedes donde servimos con amor y dignidad en el corazón de Nuevo León."
      />

      <ComedoresTabs comedores={COMEDORES} />
    </main>
  );
}
