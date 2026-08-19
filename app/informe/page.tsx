import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InformeSection } from "@/components/informe/InformeSection";
import { InformeSidebar } from "@/components/informe/InformeSidebar";
import { revealDelay } from "@/lib/scrollRevealStyle";
import {
  INFORME_COMEDORES,
  INFORME_DEMOGRAPHICS,
  INFORME_DONORS,
  INFORME_EVENTS,
  INFORME_EXPENSES,
  INFORME_FUNDING_SOURCES,
  INFORME_MAINTENANCE,
} from "@/services/data/informe.data";

export const metadata: Metadata = {
  title: "Comedor de los Pobres - Informe",
  description:
    "Informe de Actividades y Resultados de la Asociación Juan XXIII. Conoce nuestro impacto y logros.",
};

export default function Informe() {
  return (
    <>
      {/* PORTADA DEL INFORME */}
      <section className="hero-visual text-white">
        <div className="hero-pattern" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center relative z-10 py-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6 scroll-reveal" style={revealDelay(100)}>
            Informe{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Anual 2025
            </span>
          </h1>
          <p
            className="text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed opacity-90 scroll-reveal"
            style={revealDelay(200)}
          >
            Comprometidos con la disminución de la pobreza alimentaria, compartimos los resultados
            y el impacto de nuestra labor durante este año.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <InformeSidebar />

          <div className="lg:col-span-9 space-y-24">
            <InformeSection
              id="organizacion"
              title="Nuestra Organización"
              icon="fa-users"
              iconClasses="bg-purple-100 text-purple-600"
            >
              <div className="prose prose-lg text-gray-500 max-w-none scroll-reveal" style={revealDelay(200)}>
                <p className="mb-6">
                  Juan XXIII al Servicio de los Pobres A.C. es una institución impulsada por la
                  gran visión del <strong>Padre Roberto Infante M.R.</strong> Nuestra estructura y
                  operación diaria están dedicadas plenamente a servir a quienes más lo necesitan.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-10 font-normal">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 card-shadow">
                    <h4 className="text-purple-900 font-bold mb-4 flex items-center gap-2">
                      <i className="fas fa-bullseye text-orange-500" aria-hidden="true" /> Objetivo
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Contribuir en la disminución de la pobreza alimentaria, ofreciendo una
                      comida diaria y gratuita, al mediodía, seis días de la semana los doce meses
                      al año, a personas en situación vulnerable. Es vital que todas las personas
                      tengamos una adecuada nutrición para que nuestro potencial de desarrollo sea
                      óptimo.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 card-shadow">
                    <h4 className="text-purple-900 font-bold mb-4 flex items-center gap-2">
                      <i className="fas fa-heart text-orange-500" aria-hidden="true" /> Nuestra Misión
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Actuamos de manera inmediata para garantizarles que un plato nutritivo
                      llegue a ellos con el objetivo de satisfacer esta necesidad y a su vez tener
                      oportunidades de desarrollo personal y laboral. Elevar la calidad de vida de
                      nuestros beneficiarios y mejorar sus condiciones económicas.
                    </p>
                  </div>
                </div>
              </div>
            </InformeSection>

            <InformeSection
              id="impacto"
              title="Impacto 2025"
              icon="fa-chart-pie"
              iconClasses="bg-orange-100 text-orange-600"
            >
              <div
                className="bg-purple-900 text-white rounded-[3rem] p-10 mb-12 shadow-xl scroll-reveal"
                style={revealDelay(200)}
              >
                <h3 className="text-xl font-bold mb-2">Resultados Anuales</h3>
                <p className="text-sm text-purple-200 mb-8 max-w-xl">
                  En el 2025, beneficiamos a niñas, niños, adolescentes, jóvenes, adultos y
                  personas de la tercera edad sin distinción.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <span className="block text-5xl font-black text-orange-400 mb-2">108,881</span>
                    <span className="text-xs uppercase font-bold tracking-widest text-purple-300">
                      Platillos Servidos (Totalmente gratuitos)
                    </span>
                  </div>
                  <div>
                    <span className="block text-5xl font-black text-orange-400 mb-2">4,188</span>
                    <span className="text-xs uppercase font-bold tracking-widest text-purple-300">
                      Personas Beneficiadas
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 p-6 rounded-3xl">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-purple-300 mb-4">
                    Demografía de Beneficiarios
                  </h4>
                  <div className="flex h-3 rounded-full overflow-hidden mb-3">
                    {INFORME_DEMOGRAPHICS.map((band) => (
                      <div
                        key={band.label}
                        style={{ width: `${band.percentage}%` }}
                        className={band.barClass}
                        title={`${band.label}: ${band.percentage}%`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs font-bold text-purple-200 flex-wrap gap-2">
                    {INFORME_DEMOGRAPHICS.map((band) => (
                      <div key={band.label} className="flex items-center gap-1">
                        <div className={`w-3 h-3 rounded-full ${band.dotClass}`} /> {band.label} (
                        {band.percentage}%)
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-purple-900 mb-6">Nuestros Comedores</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {INFORME_COMEDORES.map((comedor) => (
                  <div
                    key={comedor.name}
                    className="bg-white p-6 rounded-3xl border border-gray-100 card-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <i className="fas fa-map-marker-alt text-2xl text-orange-500 mt-1" aria-hidden="true" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{comedor.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">{comedor.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </InformeSection>

            <InformeSection
              id="programas"
              title="Programas de Apoyo"
              icon="fa-hand-holding-heart"
              iconClasses="bg-green-100 text-green-600"
            >
              <div className="space-y-6 scroll-reveal" style={revealDelay(200)}>
                <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-gray-100 card-shadow md:h-[300px]">
                  <div className="relative md:w-1/3 h-48 md:h-full">
                    <Image
                      src="/imagenes/programa-pet.webp"
                      alt="Programa PET"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <span className="text-[10px] uppercase font-black text-green-500 tracking-widest mb-1 block">
                      Medio Ambiente y Reciclaje
                    </span>
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Programa PET</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      Compromiso de ayudar a cuidar el medio ambiente y a personas de alta
                      vulnerabilidad social. Se obtienen recursos económicos mediante la venta del
                      PET y se entregan despensas a cambio.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-bold w-fit">
                      <i className="fas fa-recycle" aria-hidden="true" /> 4,600 Kgs recolectados en
                      2025
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse bg-white rounded-3xl overflow-hidden border border-gray-100 card-shadow md:h-[300px]">
                  <div className="relative md:w-1/3 h-48 md:h-full">
                    <Image
                      src="/imagenes/apoyo-comunidad.webp"
                      alt="Apoyo a la comunidad"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <span className="text-[10px] uppercase font-black text-orange-500 tracking-widest mb-1 block">
                      Solidaridad Directa
                    </span>
                    <h3 className="text-xl font-bold text-purple-900 mb-3">
                      Apoyo a la Comunidad
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Grupos de personas y empresas se han acercado para apoyar con comidas,
                      despensas y donando diversos productos como ropa, enseres de cocina,
                      juguetes, etc., que se les entregan directamente a nuestros comensales y
                      beneficiarios.
                    </p>
                  </div>
                </div>
              </div>
            </InformeSection>

            <InformeSection
              id="eventos"
              title="Eventos e Integración Social"
              icon="fa-calendar-alt"
              iconClasses="bg-pink-100 text-pink-600"
            >
              <p className="text-gray-500 mb-8 scroll-reveal" style={revealDelay(200)}>
                Durante el 2025 promovimos la convivencia, la recaudación de fondos y el servicio
                comunitario a través de eventos especiales.
              </p>

              <div className="grid md:grid-cols-2 gap-6 scroll-reveal" style={revealDelay(300)}>
                {INFORME_EVENTS.map((event) => (
                  <div
                    key={event.title}
                    className="bg-white p-6 rounded-3xl border border-gray-100 card-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className={`w-10 h-10 rounded-full ${event.iconClasses} flex items-center justify-center mb-4`}
                      >
                        <i className={`fas ${event.icon}`} aria-hidden="true" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{event.title}</h4>
                      <p className="text-sm text-gray-500 mb-4">{event.description}</p>
                    </div>
                    <div className="text-xs font-bold text-purple-600">{event.tag}</div>
                  </div>
                ))}
              </div>
            </InformeSection>

            <InformeSection
              id="mejoras"
              title="Mantenimiento y Mejoras"
              icon="fa-tools"
              iconClasses="bg-yellow-100 text-yellow-600"
            >
              <p className="text-gray-500 mb-8 scroll-reveal" style={revealDelay(200)}>
                Mantener instalaciones dignas es fundamental para la salud de nuestros
                beneficiarios. Durante este periodo, enfocamos esfuerzos en cada unidad:
              </p>

              <div className="grid md:grid-cols-2 gap-6 scroll-reveal" style={revealDelay(300)}>
                {INFORME_MAINTENANCE.map((group) => (
                  <div
                    key={group.comedor}
                    className="bg-white p-6 rounded-3xl border border-gray-100 card-shadow"
                  >
                    <h4 className="text-purple-900 font-bold mb-3 border-b border-gray-100 pb-2">
                      {group.comedor}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {group.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2">
                          <i className="fas fa-check text-green-500 mt-1" aria-hidden="true" /> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </InformeSection>

            <InformeSection
              id="financiero"
              title="Transparencia de Recursos"
              icon="fa-coins"
              iconClasses="bg-blue-100 text-blue-600"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-8 scroll-reveal" style={revealDelay(200)}>
                <div className="bg-orange-500 p-8 rounded-[2.5rem] text-white flex flex-col justify-center relative overflow-hidden">
                  <i className="fas fa-chart-line absolute -right-4 -bottom-4 text-9xl opacity-20" aria-hidden="true" />
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">
                    Presupuesto Anual (4 Unidades)
                  </span>
                  <h3 className="text-4xl font-black mb-6">$6,675,355.20</h3>
                  <div className="w-full h-px bg-white/20 my-2" />
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-80 mt-4 mb-2">
                    Total Ingresos Movilizados
                  </span>
                  <h3 className="text-4xl font-black">$6,910,740.00</h3>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 card-shadow">
                  <h4 className="font-black text-gray-400 text-[10px] uppercase tracking-widest mb-6">
                    Aplicación de Recursos (Egresos $6,916,577)
                  </h4>
                  <div className="space-y-6">
                    {INFORME_EXPENSES.map((expense) => (
                      <div key={expense.label}>
                        <div className="flex justify-between text-xs font-bold mb-2">
                          <span>{expense.label}</span>
                          <span>{expense.percentageLabel}</span>
                        </div>
                        <div className="progress-bar">
                          <div
                            className={`progress-fill ${expense.barClass}`}
                            style={{ width: expense.barWidth }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="max-w-3xl mx-auto mb-8">
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 card-shadow">
                  <h4 className="font-black text-gray-400 text-[10px] uppercase tracking-widest mb-6">
                    Origen de Recursos Movilizados
                  </h4>
                  <div className="space-y-5 mt-2">
                    {INFORME_FUNDING_SOURCES.map((source, index) => (
                      <div key={source.label} className="flex items-center gap-4">
                        <div className="w-10 text-right text-sm font-black text-purple-600">
                          {source.percentage}
                        </div>
                        <div
                          className={`flex-1 text-sm text-gray-600 font-medium ${
                            index < INFORME_FUNDING_SOURCES.length - 1
                              ? "pb-2 border-b border-gray-100"
                              : ""
                          }`}
                        >
                          {source.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-purple-50/50 p-10 rounded-[2.5rem] border border-purple-100/50">
                <h4 className="text-purple-900 font-black mb-10 text-center">
                  Agradecemos profundamente el apoyo de:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-left max-w-5xl mx-auto">
                  {INFORME_DONORS.map((donor) => (
                    <div
                      key={donor}
                      className="flex items-center gap-3 text-sm text-gray-600 font-medium whitespace-nowrap"
                    >
                      <i className="fas fa-heart text-orange-500 text-[10px]" aria-hidden="true" /> {donor}
                    </div>
                  ))}
                  <div className="flex items-center gap-3 text-sm text-purple-700 font-black md:col-span-3 mt-4 justify-center">
                    <i className="fas fa-users text-purple-600" aria-hidden="true" /> Y cientos de
                    personas físicas
                  </div>
                </div>
              </div>
            </InformeSection>

            <InformeSection
              id="reconocimientos"
              title="Reconocimientos 2025"
              icon="fa-award"
              iconClasses="bg-teal-100 text-teal-600"
            >
              <div className="flex flex-col md:flex-row gap-6 mb-16 scroll-reveal" style={revealDelay(200)}>
                <div className="flex-1 bg-white p-8 rounded-3xl border border-yellow-200 shadow-sm flex items-start gap-6 card-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-50 text-yellow-500 flex items-center justify-center shrink-0">
                    <i className="fas fa-star text-3xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Socio Formador</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Reconocimiento por su valiosa participación como Socio Formador del{" "}
                      <strong>Tecnológico de Monterrey</strong> (Escuela de Ingeniería y Ciencias)
                      Agosto 2023 a Junio 2025.
                    </p>
                  </div>
                </div>
                <div className="flex-1 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-6 card-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                    <i className="fas fa-graduation-cap text-3xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Profesionalización</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Diplomados de Fortalecimiento de Habilidades Directivas y Profesionalización
                      de OSC, impartidos por la <strong>EGADE Business School</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-12 lg:p-16 rounded-[3rem] text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-100/50 to-orange-50/50" />
                <div className="relative z-10">
                  <h2 className="text-xl md:text-2xl font-black text-purple-900 mb-6 leading-tight">
                    Gracias a todos los que hicieron posible nuestro proyecto{" "}
                    <span className="text-orange-500">
                      &quot;Alimenta la Esperanza para una vida mejor 2025&quot;
                    </span>
                    .
                  </h2>
                  <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                    Esperamos nuevamente tu apoyo en este 2026 con nuestro principal objetivo:
                    <br />
                    <strong>&quot;Comunidad que Alimenta con Dignidad&quot;</strong>.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/contactanos"
                      className="bg-purple-600 text-white px-8 py-4 rounded-full font-black text-sm hover:bg-purple-700 transition shadow-lg shadow-purple-200"
                    >
                      SER VOLUNTARIO
                    </Link>
                    <Link
                      href="/donar"
                      className="bg-orange-500 text-white px-8 py-4 rounded-full font-black text-sm hover:bg-orange-600 transition shadow-lg shadow-orange-200"
                    >
                      DONAR AHORA
                    </Link>
                  </div>
                </div>
              </div>
            </InformeSection>
          </div>
        </div>
      </main>
    </>
  );
}
