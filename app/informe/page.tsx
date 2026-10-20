import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InformeSection } from "@/components/informe/InformeSection";
import { InformeSidebar } from "@/components/informe/InformeSidebar";
import { PageHero } from "@/components/layout/PageHero";
import { toneCardClasses, toneIconClasses } from "@/components/ui/cardTones";
import { revealDelay } from "@/lib/scrollRevealStyle";
import { buildPageMetadata } from "@/lib/seo";
import {
  INFORME_COMEDORES,
  INFORME_DEMOGRAPHICS,
  INFORME_DONORS,
  INFORME_EVENTS,
  INFORME_EXPENSES,
  INFORME_FUNDING_SOURCES,
  INFORME_MAINTENANCE,
} from "@/services/data/informe.data";

export const metadata: Metadata = buildPageMetadata({
  title: "Informe Anual 2025: resultados",
  description:
    "Informe Anual 2025 de la Asociación Juan XXIII: platillos servidos, personas beneficiadas, programas, eventos y transparencia de recursos.",
  path: "/informe",
});

/** Plain gray card for lists and data blocks. */
const GRAY_CARD_CLASSES = "rounded-2xl border border-gray-200 bg-gray-100 shadow-md";

export default function Informe() {
  return (
    <>
      {/* PORTADA DEL INFORME */}
      <PageHero
        titleBefore="Informe"
        titleHighlight="Anual 2025"
        subtitle="Comprometidos con la disminución de la pobreza alimentaria, compartimos los resultados y el impacto de nuestra labor durante este año."
      />

      <main className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <InformeSidebar />

          <div className="lg:col-span-9 space-y-12">
            {/* ORGANIZACIÓN */}
            <InformeSection
              id="organizacion"
              title="Nuestra Organización"
              icon="fa-users"
              iconColorClass="text-brand"
            >
              <p
                className="mb-5 text-sm leading-relaxed text-gray-600 scroll-reveal"
                style={revealDelay(200)}
              >
                Juan XXIII al Servicio de los Pobres A.C. es una institución impulsada por la gran
                visión del <strong>Padre Roberto Infante M.R.</strong> Nuestra estructura y
                operación diaria están dedicadas plenamente a servir a quienes más lo necesitan.
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                <div
                  className={`${toneCardClasses("orange")} p-6 scroll-reveal`}
                  style={revealDelay(250)}
                >
                  <h3 className="mb-3 flex items-center gap-3 text-xl font-black text-brand">
                    <i
                      className={`pillar-icon fas fa-bullseye text-3xl ${toneIconClasses("orange")}`}
                      aria-hidden="true"
                    />
                    Objetivo
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Contribuir en la disminución de la pobreza alimentaria, ofreciendo una comida
                    diaria y gratuita, al mediodía, seis días de la semana los doce meses al año, a
                    personas en situación vulnerable. Es vital que todas las personas tengamos una
                    adecuada nutrición para que nuestro potencial de desarrollo sea óptimo.
                  </p>
                </div>
                <div
                  className={`${toneCardClasses("yellow")} p-6 scroll-reveal`}
                  style={revealDelay(350)}
                >
                  <h3 className="mb-3 flex items-center gap-3 text-xl font-black text-brand">
                    <i
                      className={`pillar-icon fas fa-heart text-3xl ${toneIconClasses("yellow")}`}
                      aria-hidden="true"
                    />
                    Nuestra Misión
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Actuamos de manera inmediata para garantizarles que un plato nutritivo llegue a
                    ellos con el objetivo de satisfacer esta necesidad y a su vez tener
                    oportunidades de desarrollo personal y laboral. Elevar la calidad de vida de
                    nuestros beneficiarios y mejorar sus condiciones económicas.
                  </p>
                </div>
              </div>
            </InformeSection>

            {/* IMPACTO */}
            <InformeSection
              id="impacto"
              title="Impacto 2025"
              icon="fa-chart-pie"
              iconColorClass="text-orange-500"
            >
              <div
                className="cta-banner mb-6 grid gap-6 p-6 md:p-8 lg:grid-cols-[1.1fr_1fr] scroll-reveal"
                style={revealDelay(200)}
              >
                <div className="relative z-10">
                  <h3 className="mb-1 text-xl font-black">Resultados Anuales</h3>
                  <p className="mb-5 max-w-md text-sm text-purple-100">
                    En el 2025, beneficiamos a niñas, niños, adolescentes, jóvenes, adultos y
                    personas de la tercera edad sin distinción.
                  </p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <span className="block text-4xl font-black text-yellow-300">108,881</span>
                      <span className="text-sm font-bold text-purple-100">
                        Platillos Servidos (Totalmente gratuitos)
                      </span>
                    </div>
                    <div>
                      <span className="block text-4xl font-black text-yellow-300">4,188</span>
                      <span className="text-sm font-bold text-purple-100">
                        Personas Beneficiadas
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 self-center rounded-xl bg-white/10 p-5 ring-1 ring-white/15">
                  <h4 className="mb-3 text-sm font-bold text-purple-100">
                    Demografía de Beneficiarios
                  </h4>
                  <div className="mb-3 flex h-3 overflow-hidden rounded-full">
                    {INFORME_DEMOGRAPHICS.map((band) => (
                      <div
                        key={band.label}
                        style={{ width: `${band.percentage}%` }}
                        className={band.barClass}
                        title={`${band.label}: ${band.percentage}%`}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-between gap-2 text-sm font-bold text-purple-100">
                    {INFORME_DEMOGRAPHICS.map((band) => (
                      <div key={band.label} className="flex items-center gap-1.5">
                        <div className={`h-3 w-3 rounded-full ${band.dotClass}`} /> {band.label} (
                        {band.percentage}%)
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="scroll-reveal" style={revealDelay(300)}>
                <h3 className="mb-4 text-xl font-black text-brand">Nuestros Comedores</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {INFORME_COMEDORES.map((comedor) => (
                    <div
                      key={comedor.name}
                      className={`${GRAY_CARD_CLASSES} card-hover flex items-start gap-4 p-5`}
                    >
                      <i
                        className="pillar-icon fas fa-map-marker-alt mt-0.5 text-3xl text-brand"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{comedor.name}</h4>
                        <p className="mt-1 text-sm text-gray-600">{comedor.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </InformeSection>

            {/* PROGRAMAS */}
            <InformeSection
              id="programas"
              title="Programas de Apoyo"
              icon="fa-hand-holding-heart"
              iconColorClass="text-green-600"
            >
              <div className="grid gap-5 md:grid-cols-2 scroll-reveal" style={revealDelay(200)}>
                <div className={`${GRAY_CARD_CLASSES} card-hover flex flex-col overflow-hidden`}>
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/imagenes/programa-pet.webp"
                      alt="Programa PET"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-1 block text-sm font-black text-green-600">
                      Medio Ambiente y Reciclaje
                    </span>
                    <h3 className="mb-2 text-xl font-black text-brand">Programa PET</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                      Compromiso de ayudar a cuidar el medio ambiente y a personas de alta
                      vulnerabilidad social. Se obtienen recursos económicos mediante la venta del
                      PET y se entregan despensas a cambio.
                    </p>
                    <div className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                      <i className="fas fa-recycle" aria-hidden="true" /> 4,600 Kgs recolectados en
                      2025
                    </div>
                  </div>
                </div>

                <div className={`${GRAY_CARD_CLASSES} card-hover flex flex-col overflow-hidden`}>
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/imagenes/apoyo-comunidad.webp"
                      alt="Apoyo a la comunidad"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-1 block text-sm font-black text-orange-600">
                      Solidaridad Directa
                    </span>
                    <h3 className="mb-2 text-xl font-black text-brand">Apoyo a la Comunidad</h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Grupos de personas y empresas se han acercado para apoyar con comidas,
                      despensas y donando diversos productos como ropa, enseres de cocina,
                      juguetes, etc., que se les entregan directamente a nuestros comensales y
                      beneficiarios.
                    </p>
                  </div>
                </div>
              </div>
            </InformeSection>

            {/* EVENTOS */}
            <InformeSection
              id="eventos"
              title="Eventos e Integración Social"
              icon="fa-calendar-alt"
              iconColorClass="text-pink-500"
            >
              <p
                className="mb-5 text-sm leading-relaxed text-gray-600 scroll-reveal"
                style={revealDelay(200)}
              >
                Durante el 2025 promovimos la convivencia, la recaudación de fondos y el servicio
                comunitario a través de eventos especiales.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                {INFORME_EVENTS.map((event, index) => (
                  <div
                    key={event.title}
                    className={`${toneCardClasses(event.tone)} flex flex-col p-6 scroll-reveal`}
                    style={revealDelay(250 + index * 100)}
                  >
                    <h3 className="mb-2 flex items-center gap-3 text-lg font-black text-brand">
                      <i
                        className={`pillar-icon fas ${event.icon} text-3xl ${toneIconClasses(event.tone)}`}
                        aria-hidden="true"
                      />
                      {event.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-gray-600">{event.description}</p>
                    <span className="mt-auto inline-flex w-fit rounded-full bg-white/80 px-3 py-1 text-sm font-bold text-brand ring-1 ring-black/5">
                      {event.tag}
                    </span>
                  </div>
                ))}
              </div>
            </InformeSection>

            {/* MANTENIMIENTO */}
            <InformeSection
              id="mejoras"
              title="Mantenimiento y Mejoras"
              icon="fa-tools"
              iconColorClass="text-yellow-600"
            >
              <p
                className="mb-5 text-sm leading-relaxed text-gray-600 scroll-reveal"
                style={revealDelay(200)}
              >
                Mantener instalaciones dignas es fundamental para la salud de nuestros
                beneficiarios. Durante este periodo, enfocamos esfuerzos en cada unidad:
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                {INFORME_MAINTENANCE.map((group, index) => (
                  <div
                    key={group.comedor}
                    className={`${toneCardClasses("purple")} p-6 scroll-reveal`}
                    style={revealDelay(250 + index * 100)}
                  >
                    <h3 className="mb-3 border-b border-black/10 pb-2 text-lg font-black text-brand">
                      {group.comedor}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {group.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2">
                          <i className="fas fa-check-circle mt-0.5 text-brand" aria-hidden="true" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </InformeSection>

            {/* TRANSPARENCIA */}
            <InformeSection
              id="financiero"
              title="Transparencia de Recursos"
              icon="fa-coins"
              iconColorClass="text-blue-500"
            >
              <div className="mb-5 grid gap-5 md:grid-cols-2 scroll-reveal" style={revealDelay(200)}>
                <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 p-6 text-white shadow-xl">
                  <i
                    className="fas fa-chart-line absolute -bottom-3 -right-3 text-8xl opacity-20"
                    aria-hidden="true"
                  />
                  <span className="mb-1 text-sm font-black opacity-90">
                    Presupuesto Anual (4 Unidades)
                  </span>
                  <h3 className="mb-4 text-3xl font-black">$6,675,355.20</h3>
                  <div className="my-1 h-px w-full bg-white/25" />
                  <span className="mb-1 mt-3 text-sm font-black opacity-90">
                    Total Ingresos Movilizados
                  </span>
                  <h3 className="text-3xl font-black">$6,910,740.00</h3>
                </div>

                <div className={`${GRAY_CARD_CLASSES} p-6`}>
                  <h4 className="mb-4 text-sm font-black text-brand">
                    Aplicación de Recursos (Egresos $6,916,577)
                  </h4>
                  <div className="space-y-4">
                    {INFORME_EXPENSES.map((expense) => (
                      <div key={expense.label}>
                        <div className="mb-1.5 flex justify-between text-sm font-bold text-gray-800">
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

              <div className="mb-5 grid gap-5 md:grid-cols-2 scroll-reveal" style={revealDelay(300)}>
                <div className={`${GRAY_CARD_CLASSES} p-6`}>
                  <h4 className="mb-4 text-sm font-black text-brand">Origen de Recursos Movilizados</h4>
                  <div className="space-y-3">
                    {INFORME_FUNDING_SOURCES.map((source) => (
                      <div key={source.label}>
                        <div className="mb-1 flex justify-between text-sm font-bold text-gray-800">
                          <span>{source.label}</span>
                          <span className="text-brand">{source.percentage}</span>
                        </div>
                        <div className="progress-bar">
                          <div
                            className="progress-fill bg-brand"
                            style={{ width: `${Number.parseInt(source.percentage, 10)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${toneCardClasses("purple")} p-6`}>
                  <h4 className="mb-4 text-sm font-black text-brand">
                    Agradecemos profundamente el apoyo de:
                  </h4>
                  <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                    {INFORME_DONORS.map((donor) => (
                      <div key={donor} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                        <i className="fas fa-heart mt-1 text-[10px] text-orange-500" aria-hidden="true" />
                        {donor}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 border-t border-black/10 pt-3 text-sm font-black text-brand">
                    <i className="fas fa-users" aria-hidden="true" /> Y cientos de personas físicas
                  </div>
                </div>
              </div>
            </InformeSection>

            {/* RECONOCIMIENTOS */}
            <InformeSection
              id="reconocimientos"
              title="Reconocimientos 2025"
              icon="fa-award"
              iconColorClass="text-teal-600"
            >
              <div className="mb-6 grid gap-5 md:grid-cols-2">
                <div
                  className={`${toneCardClasses("orange")} p-6 scroll-reveal`}
                  style={revealDelay(200)}
                >
                  <h3 className="mb-2 flex items-center gap-3 text-lg font-black text-brand">
                    <i
                      className={`pillar-icon fas fa-star text-3xl ${toneIconClasses("orange")}`}
                      aria-hidden="true"
                    />
                    Socio Formador
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Reconocimiento por su valiosa participación como Socio Formador del{" "}
                    <strong>Tecnológico de Monterrey</strong> (Escuela de Ingeniería y Ciencias)
                    Agosto 2023 a Junio 2025.
                  </p>
                </div>
                <div
                  className={`${toneCardClasses("orange")} p-6 scroll-reveal`}
                  style={revealDelay(300)}
                >
                  <h3 className="mb-2 flex items-center gap-3 text-lg font-black text-brand">
                    <i
                      className={`pillar-icon fas fa-graduation-cap text-3xl ${toneIconClasses("orange")}`}
                      aria-hidden="true"
                    />
                    Profesionalización
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Diplomados de Fortalecimiento de Habilidades Directivas y Profesionalización de
                    OSC, impartidos por la <strong>EGADE Business School</strong>.
                  </p>
                </div>
              </div>

              <div
                className="cta-banner px-6 py-8 text-center md:px-10 scroll-reveal"
                style={revealDelay(400)}
              >
                <div className="relative z-10">
                  <h2 className="mb-3 text-xl font-black leading-tight md:text-2xl">
                    Gracias a todos los que hicieron posible nuestro proyecto{" "}
                    <span className="text-yellow-300">
                      &quot;Alimenta la Esperanza para una vida mejor 2025&quot;
                    </span>
                    .
                  </h2>
                  <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-purple-100">
                    Esperamos nuevamente tu apoyo en este 2026 con nuestro principal objetivo:
                    <br />
                    <strong>&quot;Comunidad que Alimenta con Dignidad&quot;</strong>.
                  </p>
                  <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                      href="/contactanos"
                      className="rounded-lg bg-white px-8 py-3.5 text-sm font-black text-brand shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-purple-50"
                    >
                      Ser voluntario
                    </Link>
                    <Link
                      href="/donar"
                      className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
                    >
                      Donar ahora
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
