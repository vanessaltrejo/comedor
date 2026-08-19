import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { revealDelay } from "@/lib/scrollRevealStyle";

export const metadata: Metadata = {
  title: "Comedor de los Pobres - La Asociación",
  description:
    "Conoce más sobre la Asociación Juan XXIII, nuestra historia, misión y el impacto de nuestros comedores comunitarios en Nuevo León.",
};

export default function Nosotros() {
  return (
    <main>
      {/* HEADER */}
      <section className="hero-visual text-white">
        <div className="hero-pattern" />
        <div className="absolute -top-12 sm:-top-24 -left-12 sm:-left-24 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-12 sm:-right-24 w-48 sm:w-64 h-48 sm:h-64 bg-orange-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center relative z-10 py-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Una{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              misión
            </span>{" "}
            que nos define
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed opacity-90">
            Conoce la historia, los valores y el corazón de Juan XXIII al Servicio de los Pobres
            A.C.
          </p>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          <div
            className="soft-card card-hover p-6 md:p-8 shadow-sm flex gap-4 items-start scroll-reveal"
            style={revealDelay(0)}
          >
            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0 mt-1">
              <i className="fas fa-bullseye text-lg" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-black text-purple-900 mb-1 tracking-tight">Misión</h2>
              <p className="text-gray-500 leading-relaxed text-base">
                Contribuir a disminuir la pobreza alimentaria brindando una comida gratuita al
                día, seis días a la semana, a personas en situación vulnerable, en un espacio
                digno y sin distinción alguna.
              </p>
            </div>
          </div>

          <div
            className="soft-card card-hover p-6 md:p-8 shadow-sm flex gap-4 items-start scroll-reveal"
            style={revealDelay(150)}
          >
            <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center shrink-0 mt-1">
              <i className="fas fa-eye text-lg" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-black text-purple-900 mb-1 tracking-tight">Visión</h2>
              <p className="text-gray-500 leading-relaxed text-base">
                Ser una organización nacional que edifique Comedores, en cada lugar de la
                República Mexicana, para proveer de alimento a personas en situación de
                vulnerabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA / LA ASOCIACIÓN */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Imagen e Intro */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative scroll-reveal" style={revealDelay(0)}>
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <Image
                    src="/imagenes/robertoInfante.jpg"
                    alt="Padre Roberto Infante"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-6 right-4 sm:right-6 lg:-right-6 bg-purple-600 text-white p-8 rounded-[2rem] shadow-xl w-[280px] max-w-[calc(100vw-32px)] scroll-reveal"
                  style={revealDelay(200)}
                >
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">
                    Fundador
                  </p>
                  <p className="font-black text-lg leading-tight italic whitespace-nowrap">
                    &quot;Amar es servir&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Texto de Historia */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-3xl font-black text-purple-900 mb-6 scroll-reveal" style={revealDelay(0)}>
                  Nuestra Historia
                </h2>
                <div className="space-y-6 text-gray-500 leading-relaxed text-sm">
                  <p className="scroll-reveal" style={revealDelay(100)}>
                    Nuestra asociación tuvo sus inicios desde el año{" "}
                    <span className="font-bold text-purple-600">1961</span>, fecha en la cual el{" "}
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
                    creación del COMEDOR DE LOS POBRES.
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
                  className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-8 scroll-reveal"
                  style={revealDelay(100)}
                >
                  Nuestros Valores
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="value-tag scroll-reveal" style={revealDelay(150)}>
                    <i className="fas fa-dove text-purple-400" /> Espíritu de servicio
                  </div>
                  <div className="value-tag scroll-reveal" style={revealDelay(250)}>
                    <i className="fas fa-users text-purple-400" /> Compromiso social
                  </div>
                  <div className="value-tag scroll-reveal" style={revealDelay(350)}>
                    <i className="fas fa-hand-holding-heart text-purple-400" /> Respeto a la
                    dignidad
                  </div>
                  <div className="value-tag scroll-reveal" style={revealDelay(450)}>
                    <i className="fas fa-check-circle text-purple-400" /> Honestidad e Integridad
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER DE CIERRE */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-purple-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-left scroll-reveal">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Sé parte de esta historia
              </h3>
              <p className="text-purple-200">
                Tu apoyo permite que la obra del Padre Infante siga viva.
              </p>
            </div>
            <div className="mt-8 md:mt-0 relative z-10">
              <Link
                href="/contactanos"
                className="px-10 py-4 bg-orange-500 text-white rounded-full font-black text-sm hover:bg-orange-600 transition shadow-2xl inline-block"
              >
                SUMARME COMO VOLUNTARIO
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-800 rounded-full -mr-20 -mt-20 opacity-50" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-700 rounded-full -ml-10 -mb-10 opacity-30" />
          </div>
        </div>
      </section>
    </main>
  );
}
