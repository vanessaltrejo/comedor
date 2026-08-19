import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnnouncementCarousel } from "@/components/home/AnnouncementCarousel";
import { revealDelay } from "@/lib/scrollRevealStyle";

export const metadata: Metadata = {
  title: "Comedor de los Pobres",
  description:
    "Asociación Juan XXIII - Comedor de los Pobres P. Roberto Infante en Nuevo León. Transformando vidas a través de la nutrición digna.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90dvh] md:min-h-[90vh] flex items-center overflow-hidden py-12 sm:py-16 lg:py-0">
        <div className="blob -top-20 -right-20" style={{ background: "rgba(251, 191, 36, 0.15)" }} />
        <div className="blob -bottom-20 -left-20" style={{ background: "rgba(124, 58, 237, 0.15)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Contenido Texto */}
          <div className="lg:col-span-7 z-10">
            <div
              className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-100 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 max-w-full scroll-reveal"
              style={revealDelay(100)}
            >
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-purple-600" />
              <span className="text-purple-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-tight">
                Juan XXIII al Servicio de los Pobres
              </span>
            </div>

            <h1
              className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] sm:leading-none mb-5 sm:mb-8 scroll-reveal"
              style={revealDelay(200)}
            >
              Alimentando la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500">
                Esperanza
              </span>
            </h1>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-10 max-w-xl leading-relaxed scroll-reveal"
              style={revealDelay(300)}
            >
              Transformamos vidas a través de la nutrición digna. Conoce nuestros centros de
              atención y únete a nuestra misión en Nuevo León.
            </p>

            <div className="flex flex-row items-center gap-3 sm:gap-4 scroll-reveal" style={revealDelay(400)}>
              <Link
                href="/comedores"
                className="bg-purple-600 text-white text-center px-5 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-sm sm:text-lg shadow-xl hover:bg-purple-700 transition-all btn-glow flex items-center justify-center"
              >
                Nuestros Comedores
              </Link>
              <Link
                href="/donar"
                className="bg-orange-500 text-white text-center px-5 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-sm sm:text-lg shadow-xl hover:bg-orange-600 transition-all btn-glow flex items-center justify-center"
              >
                Donar Ahora
              </Link>
            </div>

            <div className="mt-8 sm:mt-12 flex scroll-reveal" style={revealDelay(500)}>
              <div className="inline-flex items-center h-10 px-5 rounded-full border-2 border-white bg-yellow-400 text-purple-900 font-bold text-sm shadow-md transition-all duration-300 hover:scale-105 select-none">
                +50 voluntarios activos hoy
              </div>
            </div>
          </div>

          {/* Imagen / Composición Visual */}
          <div className="lg:col-span-5 relative max-lg:max-w-md max-lg:mx-auto w-full">
            <div
              className="relative z-10 w-full aspect-[4/5] max-h-[min(55vh,420px)] sm:max-h-none rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl rotate-2 sm:rotate-3 hover:rotate-0 transition-transform duration-500 border-4 sm:border-8 border-white scroll-reveal"
              style={revealDelay(300)}
            >
              <Image
                src="/imagenes/fotoportada.webp"
                alt="Comedor Social"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-3xl -z-10 -rotate-6" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-3xl -z-10 rotate-12" />
          </div>
        </div>
      </section>

      {/* TRES PILARES */}
      <section className="py-16 md:py-24 bg-gray-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
          <div
            className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-50 card-hover scroll-reveal"
            style={revealDelay(0)}
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-8 text-2xl">
              <i className="fas fa-handshake" />
            </div>
            <h3 className="text-xl font-black text-purple-900 mb-4">Responsabilidad Social</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Nuestro compromiso es proveer por lo menos el alimento del día de hoy a las personas
              que asisten a nuestros comedores, para que puedan enfrentar el día con esperanza.
            </p>
            <Link
              href="/nosotros"
              className="text-purple-600 font-black text-xs uppercase tracking-widest flex items-center group"
            >
              Leer más <i className="fas fa-chevron-right ml-2 group-hover:ml-4 transition-all" />
            </Link>
          </div>

          <div
            className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-50 card-hover scroll-reveal"
            style={revealDelay(150)}
          >
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-8 text-2xl">
              <i className="fas fa-box-open" />
            </div>
            <h3 className="text-xl font-black text-purple-900 mb-4">Donativos</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Tu apoyo puede ser económico o en especie; tu aportación nos ayudará a continuar con
              la preparación diaria de los alimentos y la operación constante de los Comedores.
            </p>
            <Link
              href="/donar"
              className="text-orange-600 font-black text-xs uppercase tracking-widest flex items-center group"
            >
              ¿Cómo donar? <i className="fas fa-chevron-right ml-2 group-hover:ml-4 transition-all" />
            </Link>
          </div>

          <div
            className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-50 card-hover scroll-reveal"
            style={revealDelay(300)}
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-8 text-2xl">
              <i className="fas fa-users" />
            </div>
            <h3 className="text-xl font-black text-purple-900 mb-4">¡Participa!</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Ofrece tu tiempo para ayudar a quien más lo necesita. Apoya en la operación diaria de
              alimentar a cientos de personas. Cada mano cuenta para transformar realidades.
            </p>
            <Link
              href="/contactanos"
              className="text-yellow-600 font-black text-xs uppercase tracking-widest flex items-center group"
            >
              Ser Voluntario <i className="fas fa-chevron-right ml-2 group-hover:ml-4 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE NOVEDADES (CAROUSEL DE ANUNCIOS) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnnouncementCarousel />
        </div>
      </section>

      {/* SECCIÓN DE CAMPAÑAS Y VIDEOS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-purple-900 italic">Acciones que Dejan Huella</h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <a
              href="https://www.youtube.com/watch?v=bkDXa2lRu9s"
              target="_blank"
              rel="noopener noreferrer"
              className="block group cursor-pointer scroll-reveal"
              style={revealDelay(0)}
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-lg mb-6">
                <Image
                  src="/imagenes/video-institucional.webp"
                  alt="Video Institucional"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition">
                    <i className="fas fa-play text-xl ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-sm font-bold text-purple-900 uppercase tracking-widest text-center">
                Video Institucional
              </p>
            </a>

            <a
              href="https://www.youtube.com/watch?v=GY7a6vkFO3s"
              target="_blank"
              rel="noopener noreferrer"
              className="block group cursor-pointer scroll-reveal"
              style={revealDelay(150)}
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-lg mb-6">
                <Image
                  src="/imagenes/nuestra-directora.webp"
                  alt="Nuestra Directora"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition">
                    <i className="fas fa-play text-xl ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-sm font-bold text-purple-900 uppercase tracking-widest text-center">
                Nuestra Directora
              </p>
            </a>

            <a
              href="https://www.youtube.com/watch?v=hJ_-4FF7Xr0"
              target="_blank"
              rel="noopener noreferrer"
              className="block group cursor-pointer scroll-reveal"
              style={revealDelay(300)}
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-lg mb-6">
                <Image
                  src="/imagenes/comedor-unidad-escobedo.webp"
                  alt="Comedor Unidad Escobedo"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition">
                    <i className="fas fa-play text-xl ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-sm font-bold text-purple-900 uppercase tracking-widest text-center">
                Comedor Unidad Escobedo
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
