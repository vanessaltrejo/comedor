import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { revealDelay } from "@/lib/scrollRevealStyle";
import { PageHero } from "@/components/layout/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Nosotros: historia, misión y visión",
  description:
    "Conoce la historia, la misión, la visión y los valores de la Asociación Juan XXIII y del Padre Roberto Infante, fundador del Comedor de los Pobres.",
  path: "/nosotros",
});

export default function Nosotros() {
  return (
    <main>
      {/* HEADER */}
      <PageHero
        titleBefore="Una"
        titleHighlight="misión"
        titleAfter="que nos define"
        subtitle="Conoce la historia, los valores y el corazón de Juan XXIII al Servicio de los Pobres A.C."
      />

      {/* MISIÓN Y VISIÓN */}
      <section className="pt-12 pb-8">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          <div
            className="pillar-card bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-2xl card-hover card-accent-orange scroll-reveal"
            style={revealDelay(0)}
          >
            <div className="flex items-center gap-3 mb-3">
              <i className="pillar-icon fas fa-bullseye text-4xl text-orange-500" aria-hidden="true" />
              <h2 className="text-xl font-black text-brand">Misión</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Contribuir a disminuir la pobreza alimentaria brindando una comida gratuita al día,
              seis días a la semana, a personas en situación vulnerable, en un espacio digno y sin
              distinción alguna.
            </p>
          </div>

          <div
            className="pillar-card bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl card-hover card-accent-yellow scroll-reveal"
            style={revealDelay(150)}
          >
            <div className="flex items-center gap-3 mb-3">
              <i className="pillar-icon fas fa-eye text-4xl text-yellow-600" aria-hidden="true" />
              <h2 className="text-xl font-black text-brand">Visión</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Ser una organización nacional que edifique Comedores, en cada lugar de la República
              Mexicana, para proveer de alimento a personas en situación de vulnerabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* HISTORIA / LA ASOCIACIÓN */}
      <section className="py-16 md:py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Imagen e Intro */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 max-lg:max-w-xs max-lg:mx-auto w-full">
              <div className="relative scroll-reveal" style={revealDelay(0)}>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/imagenes/robertoInfante.jpg"
                    alt="Padre Roberto Infante"
                    fill
                    sizes="(max-width: 1024px) 320px, 30vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-5 right-3 lg:-right-5 bg-brand text-white px-6 py-5 rounded-2xl shadow-xl w-[230px] max-w-[calc(100vw-32px)] scroll-reveal"
                  style={revealDelay(200)}
                >
                  <p className="text-sm font-bold tracking-wide opacity-80 mb-2">
                    Fundador
                  </p>
                  <p className="font-black text-lg leading-tight italic whitespace-nowrap">
                    &quot;Amar es servir&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Texto de Historia */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="text-3xl font-black text-brand mb-6 scroll-reveal" style={revealDelay(0)}>
                  Nuestra Historia
                </h2>
                <div className="space-y-6 text-gray-500 leading-relaxed text-sm">
                  <p className="scroll-reveal" style={revealDelay(100)}>
                    Nuestra asociación tuvo sus inicios desde el año{" "}
                    <span className="font-bold text-brand">1961</span>, fecha en la cual el{" "}
                    <span className="text-slate-800 font-bold">
                      Padre Roberto Infante Castañeda
                    </span>{" "}
                    inició su proyecto para dar alimentos a los más desamparados, dando servicio
                    en un comedor parroquial para pobres.
                  </p>
                  <p className="scroll-reveal" style={revealDelay(200)}>
                    Gracias a la gran labor altruista y al loable esfuerzo del Pbro. Roberto
                    Infante Castañeda sigue dando servicio en la actualidad en cuatro (4) sedes en
                    diferentes Municipios de Nuevo León.
                  </p>
                  <p className="scroll-reveal" style={revealDelay(300)}>
                    Un 27 de Junio de 1961, este comedor tuvo sus inicios en la Colonia Industrial
                    en Monterrey, una de las más precarias de la ciudad. Al ver la vulnerabilidad
                    de las personas, el Padre Infante decidió llevar a cabo lo que se convertiría
                    en su obra más importante y por la que sería ampliamente recordado: la
                    creación del Comedor de los Pobres.
                  </p>
                  <p className="scroll-reveal" style={revealDelay(400)}>
                    El <span className="font-bold text-slate-800">29 de Octubre de 1969</span>, la
                    asociación Juan XXIII al Servicio de los Pobres A.C. fue legalmente
                    constituida.
                  </p>
                </div>
              </div>

              {/* Valores */}
              <div className="pt-8 border-t border-gray-100">
                <h3
                  className="text-xl font-black text-brand mb-6 scroll-reveal"
                  style={revealDelay(100)}
                >
                  Nuestros Valores
                  <span className="mt-2 block h-0.5 w-6 rounded-full bg-brand" aria-hidden="true" />
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="value-tag card-hover scroll-reveal" style={revealDelay(150)}>
                    <i className="fas fa-dove" /> Espíritu de servicio
                  </div>
                  <div className="value-tag card-hover scroll-reveal" style={revealDelay(250)}>
                    <i className="fas fa-users" /> Compromiso social
                  </div>
                  <div className="value-tag card-hover scroll-reveal" style={revealDelay(350)}>
                    <i className="fas fa-hand-holding-heart" /> Respeto a la
                    dignidad
                  </div>
                  <div className="value-tag card-hover scroll-reveal" style={revealDelay(450)}>
                    <i className="fas fa-check-circle" /> Honestidad e Integridad
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER DE CIERRE */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10">
          <div
            className="cta-banner flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8 md:px-10 text-center md:text-left scroll-reveal"
            style={revealDelay(0)}
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-5">
              <i
                className="fas fa-hand-holding-heart shrink-0 text-5xl text-yellow-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                  Sé parte de esta historia
                </h3>
                <p className="text-sm text-purple-100">
                  Tu apoyo permite que la obra del Padre Infante siga viva.
                </p>
              </div>
            </div>
            <Link
              href="/contactanos"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 text-white rounded-lg font-black text-sm hover:bg-orange-600 hover:-translate-y-0.5 transition shadow-lg shadow-black/20"
            >
              Sumarme como voluntario <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
