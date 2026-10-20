import type { Metadata } from "next";
import { ContactForm } from "@/components/contactanos/ContactForm";
import { revealDelay } from "@/lib/scrollRevealStyle";
import { PageHero } from "@/components/layout/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contáctanos y ser voluntario",
  description:
    "Escríbenos o llámanos para donar, ser voluntario o resolver dudas. Teléfono, WhatsApp y correo del Comedor de los Pobres en Monterrey, N.L.",
  path: "/contactanos",
});

const SEDES: string[] = [
  "Monterrey (Oficina Administrativa)",
  "Escobedo",
  "García",
  "Guadalupe",
  "Juárez",
];

export default function Contactanos() {
  return (
    <>
      {/* PORTADA */}
      <PageHero
        titleBefore="Ponte en"
        titleHighlight="contacto"
        subtitle="¿Tienes dudas, quieres ser voluntario o realizar una donación en especie? Envíanos un mensaje y nos pondremos en contacto contigo."
      />

      {/* SECCIÓN FORMULARIO Y CANALES */}
      <section className="py-10 md:py-12">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
            {/* Columna Formulario */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Columna Info de Contacto Rápido */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div
                className="cta-banner p-6 md:p-8 scroll-reveal"
                style={revealDelay(200)}
              >
                <div className="relative z-10">
                  <h3 className="mb-5 text-xl font-black">Canales Directos</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <i
                        className="fas fa-phone-alt mt-1 text-2xl text-orange-400 drop-shadow-[0_3px_4px_rgba(0,0,0,0.25)]"
                        aria-hidden="true"
                      />
                      <div>
                        <span className="block text-sm font-bold text-purple-100">Teléfono Oficinas</span>
                        <a
                          href="tel:8183751163"
                          className="text-lg font-bold transition-colors hover:text-orange-300"
                        >
                          81 8375 1163
                        </a>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/528130954567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl bg-green-500 px-4 py-3 text-white shadow-lg shadow-black/25 ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-green-400"
                    >
                      <i className="fab fa-whatsapp text-4xl" aria-hidden="true" />
                      <div>
                        <span className="block text-sm font-bold text-green-50">Whatsapp</span>
                        <span className="text-lg font-black">81 3095 4567</span>
                      </div>
                    </a>
                    <div className="flex items-start gap-3 sm:col-span-2">
                      <i
                        className="fas fa-envelope mt-1 text-2xl text-orange-400 drop-shadow-[0_3px_4px_rgba(0,0,0,0.25)]"
                        aria-hidden="true"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-purple-100">Correo General</span>
                        <a
                          href="mailto:unete@comedordelospobres.org"
                          className="break-all font-bold transition-colors hover:text-orange-300"
                        >
                          unete@comedordelospobres.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-1 flex-col rounded-2xl border border-gray-200 bg-gray-100 p-6 shadow-xl md:p-8 scroll-reveal"
                style={revealDelay(300)}
              >
                <h3 className="mb-4 flex items-center gap-3 text-xl font-black text-brand">
                  <i className="pillar-icon fas fa-map-marker-alt text-3xl text-brand" aria-hidden="true" />
                  Nuestras Sedes
                </h3>
                <ul className="grid flex-1 content-evenly gap-x-6 gap-y-3 text-sm font-medium text-gray-700 sm:grid-cols-2">
                  {SEDES.map((sede, index) => (
                    <li
                      key={sede}
                      className={`flex items-center gap-2 ${index === 0 ? "sm:col-span-2" : ""}`}
                    >
                      <i className="fas fa-check-circle mt-0.5 text-brand" aria-hidden="true" /> {sede}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
