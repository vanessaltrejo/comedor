import type { Metadata } from "next";
import { ComedoresTabs } from "@/components/comedores/ComedoresTabs";
import { COMEDORES } from "@/services/data/comedores.data";
import { revealDelay } from "@/lib/scrollRevealStyle";

export const metadata: Metadata = {
  title: "Nuestros Comedores - Comedor de los Pobres",
  description:
    "Conoce nuestras 4 sedes: Escobedo, García, Guadalupe y Juárez. Brindamos alimento y esperanza a quienes más lo necesitan.",
};

export default function Comedores() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="hero-visual text-white">
        <div className="hero-pattern" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center relative z-10 py-8">
          <h1
            className="text-4xl md:text-5xl font-black mb-6 scroll-reveal"
            style={revealDelay(100)}
          >
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Comedores
            </span>
          </h1>
          <p
            className="text-lg text-purple-100 max-w-xl mx-auto leading-relaxed opacity-90 scroll-reveal"
            style={revealDelay(200)}
          >
            Conoce las sedes donde servimos con amor y dignidad en el corazón de Nuevo León.
          </p>
        </div>
      </section>

      <ComedoresTabs comedores={COMEDORES} />
    </main>
  );
}
