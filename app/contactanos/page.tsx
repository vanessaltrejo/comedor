import type { Metadata } from "next";
import { ContactForm } from "@/components/contactanos/ContactForm";
import { revealDelay } from "@/lib/scrollRevealStyle";

export const metadata: Metadata = {
  title: "Comedor de los Pobres - Contáctanos",
  description:
    "Contáctanos. Asociación Juan XXIII - Comedor de los Pobres. Ponte en comunicación con nosotros para donar o ser voluntario.",
};

export default function Contactanos() {
  return (
    <>
      {/* PORTADA */}
      <section className="hero-visual text-white">
        <div className="hero-pattern" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center relative z-10 py-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6 scroll-reveal" style={revealDelay(100)}>
            Ponte en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              contacto
            </span>
          </h1>
          <p
            className="text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed opacity-90 scroll-reveal"
            style={revealDelay(200)}
          >
            ¿Tienes dudas, quieres ser voluntario o realizar una donación en especie? Envíanos un
            mensaje y nos pondremos en contacto contigo.
          </p>
        </div>
      </section>

      {/* SECCIÓN FORMULARIO Y MAPA */}
      <section className="pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Columna Formulario */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Columna Info de Contacto Rápido */}
            <div className="lg:col-span-5 space-y-6">
              <div
                className="bg-purple-900 rounded-[2.5rem] p-6 sm:p-10 text-white relative overflow-hidden scroll-reveal"
                style={revealDelay(200)}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-6">Canales Directos</h3>
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-800 rounded-xl flex items-center justify-center shrink-0">
                          <i className="fas fa-phone-alt text-orange-400" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-purple-300 uppercase block mb-1">
                            Teléfono Oficinas
                          </span>
                          <p className="font-bold text-lg">
                            <a href="tel:8183751163" className="hover:text-orange-400 transition-colors">
                              81 8375 1163
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 sm:ml-4">
                        <div className="w-10 h-10 bg-purple-800 rounded-xl flex items-center justify-center shrink-0">
                          <i className="fab fa-whatsapp text-orange-400 text-lg" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-purple-300 uppercase block mb-1">
                            Whatsapp
                          </span>
                          <p className="font-bold text-lg">
                            <a
                              href="https://wa.me/528130954567"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-orange-400 transition-colors"
                            >
                              81 3095 4567
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-800 rounded-xl flex items-center justify-center shrink-0">
                        <i className="fas fa-envelope text-orange-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-purple-300 uppercase block mb-1">
                          Correo General
                        </span>
                        <p className="font-bold break-all">
                          <a
                            href="mailto:unete@comedordelospobres.org"
                            className="hover:text-orange-400 transition-colors"
                          >
                            unete@comedordelospobres.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-800 rounded-full opacity-50" />
              </div>

              <div
                className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-gray-100 scroll-reveal"
                style={revealDelay(300)}
              >
                <h3 className="text-purple-900 font-black mb-6">Nuestras Sedes</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <i className="fas fa-check text-green-500" /> Monterrey (Oficina
                    Administrativa)
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <i className="fas fa-check text-green-500" /> Escobedo
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <i className="fas fa-check text-green-500" /> García
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <i className="fas fa-check text-green-500" /> Guadalupe
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <i className="fas fa-check text-green-500" /> Juárez
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
