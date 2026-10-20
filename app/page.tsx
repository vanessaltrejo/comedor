import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementCards } from "@/components/home/AnnouncementCards";
import { HeroCollage } from "@/components/home/HeroCollage";
import { HeroRipples } from "@/components/home/HeroRipples";
import { VideoCards } from "@/components/home/VideoCards";
import { revealDelay } from "@/lib/scrollRevealStyle";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/",
});

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-decor relative min-h-[90dvh] md:min-h-[90vh] flex items-center overflow-hidden py-12 sm:py-16 lg:py-0">
        <HeroRipples />
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 sm:gap-10 lg:gap-10 xl:gap-14 items-center">
          {/* Contenido Texto */}
          <div className="z-10 lg:pl-8">
            <div
              className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-100 px-3.5 sm:px-4 py-2 rounded-full mb-4 sm:mb-7 max-w-full scroll-reveal"
              style={revealDelay(100)}
            >
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-brand" />
              <span className="text-brand text-sm font-bold tracking-wide leading-tight">
                Juan XXIII al Servicio de los Pobres
              </span>
            </div>

            <h1
              className="text-4xl xs:text-5xl sm:text-[3.25rem] lg:text-[3.25rem] xl:text-[4rem] min-[1400px]:text-[4.5rem] font-black text-gray-900 leading-[1.05] sm:leading-none mb-5 sm:mb-9 scroll-reveal"
              style={revealDelay(200)}
            >
              Alimentando la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-500 to-yellow-500">
                Esperanza
              </span>
            </h1>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-7 sm:mb-10 max-w-xl lg:max-w-2xl leading-relaxed scroll-reveal"
              style={revealDelay(300)}
            >
              Transformamos vidas a través de la nutrición digna. Conoce nuestros centros de
              atención y únete a nuestra misión en Nuevo León.
            </p>

            <div className="flex flex-row items-center gap-3 sm:gap-4 scroll-reveal" style={revealDelay(400)}>
              <Link
                href="/comedores"
                className="bg-brand text-white text-center px-5 sm:px-9 py-4 sm:py-[1.125rem] rounded-lg font-bold text-sm sm:text-[1.0625rem] shadow-xl hover:bg-brand-dark transition-all btn-glow flex items-center justify-center"
              >
                Nuestros Comedores
              </Link>
              <Link
                href="/donar"
                className="bg-orange-500 text-white text-center px-5 sm:px-9 py-4 sm:py-[1.125rem] rounded-lg font-bold text-sm sm:text-[1.0625rem] shadow-xl hover:bg-orange-600 transition-all btn-glow flex items-center justify-center"
              >
                Donar Ahora
              </Link>
            </div>

            <div className="mt-6 sm:mt-10 flex scroll-reveal" style={revealDelay(500)}>
              <div className="inline-flex items-center h-11 px-5 rounded-full border-2 border-white bg-yellow-400 text-brand font-bold text-sm shadow-md transition-all duration-300 hover:scale-105 select-none">
                +50 voluntarios activos hoy
              </div>
            </div>
          </div>

          {/* Imagen / Composición Visual */}
          <HeroCollage />
        </div>
      </section>

      {/* PILARES + NOVEDADES + VIDEOS */}
      <section className="py-16 md:py-24 bg-white relative z-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 space-y-8 lg:space-y-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="pillar-card bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-2xl card-hover scroll-reveal"
              style={revealDelay(0)}
            >
              <div className="flex items-center gap-3 mb-4">
                <i className="pillar-icon fas fa-handshake text-4xl text-brand" aria-hidden="true" />
                <h3 className="text-xl font-black text-brand">Responsabilidad Social</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Nuestro compromiso es proveer por lo menos el alimento del día de hoy a las personas
                que asisten a nuestros comedores, para que puedan enfrentar el día con esperanza.
              </p>
              <Link
                href="/nosotros"
                className="inline-flex items-center px-5 py-2.5 rounded-lg font-bold text-sm transition-colors group bg-brand text-white hover:bg-brand-dark"
              >
                Leer más <i className="fas fa-chevron-right ml-2 group-hover:ml-4 transition-all" />
              </Link>
            </div>

            <div
              className="pillar-card bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-2xl card-hover card-accent-orange scroll-reveal"
              style={revealDelay(150)}
            >
              <div className="flex items-center gap-3 mb-4">
                <i className="pillar-icon fas fa-box-open text-4xl text-orange-500" aria-hidden="true" />
                <h3 className="text-xl font-black text-brand">Donativos</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Tu apoyo puede ser económico o en especie; tu aportación nos ayudará a continuar con
                la preparación diaria de los alimentos y la operación constante de los Comedores.
              </p>
              <Link
                href="/donar"
                className="inline-flex items-center px-5 py-2.5 rounded-lg font-bold text-sm transition-colors group bg-orange-500 text-white hover:bg-orange-600"
              >
                ¿Cómo donar? <i className="fas fa-chevron-right ml-2 group-hover:ml-4 transition-all" />
              </Link>
            </div>

            <div
              className="pillar-card bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl card-hover card-accent-yellow scroll-reveal"
              style={revealDelay(300)}
            >
              <div className="flex items-center gap-3 mb-4">
                <i className="pillar-icon fas fa-users text-4xl text-yellow-600" aria-hidden="true" />
                <h3 className="text-xl font-black text-brand">¡Participa!</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ofrece tu tiempo para ayudar a quien más lo necesita. Apoya en la operación diaria de
                alimentar a cientos de personas. Cada mano cuenta para transformar realidades.
              </p>
              <Link
                href="/contactanos"
                className="inline-flex items-center px-5 py-2.5 rounded-lg font-bold text-sm transition-colors group bg-yellow-400 text-brand hover:bg-yellow-500"
              >
                Ser Voluntario <i className="fas fa-chevron-right ml-2 group-hover:ml-4 transition-all" />
              </Link>
            </div>
          </div>
          <AnnouncementCards />
          <VideoCards />
        </div>
      </section>
    </main>
  );
}
