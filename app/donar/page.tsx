import type { Metadata } from "next";
import { PaymentMethodsSection } from "@/components/donar/PaymentMethodsSection";
import { revealDelay } from "@/lib/scrollRevealStyle";

export const metadata: Metadata = {
  title: "Donar - Comedor de los Pobres",
  description:
    "Tu generosidad alimenta la esperanza. Conoce las opciones de donativo vía transferencia bancaria y PayPal para la Asociación Juan XXIII.",
};

export default function Donar() {
  return (
    <div className="bg-slate-50 text-gray-800">
      {/* HERO / INTRODUCCIÓN PSICOLÓGICA */}
      <section className="hero-visual text-white">
        <div className="donar-hero-pattern" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full text-center relative z-10 py-8">
          <h1 className="text-4xl md:text-5xl font-black mb-6 scroll-reveal" style={revealDelay(100)}>
            Alimenta la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Esperanza
            </span>
          </h1>
          <p
            className="text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed opacity-90 scroll-reveal"
            style={revealDelay(200)}
          >
            Con tu donación compras la materia prima para preparar alimentos calientes y dignos.
            Cada aportación se traduce directamente en nutrición y amor para quien más lo
            necesita.
          </p>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL DE DONACIÓN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative z-20">
        <PaymentMethodsSection />

        {/* SECCIÓN DE TRANSPARENCIA Y CONFIANZA */}
        <section
          className="max-w-4xl mx-auto mt-20 pt-12 border-t border-gray-100 text-center scroll-reveal"
          style={revealDelay(200)}
        >
          <h3 className="text-xl font-black text-purple-900 mb-4">
            ¿Tienes alguna duda o necesitas un Recibo Deducible?
          </h3>
          <p className="text-gray-500 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Si requieres un comprobante fiscal para deducir impuestos en México, por favor
            envíanos tu comprobante de transferencia y datos fiscales por correo o WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/528130954567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-600 rounded-2xl border border-green-200 text-sm font-bold hover:bg-green-50/50 transition"
            >
              <i className="fab fa-whatsapp" /> Reportar por WhatsApp
            </a>
            <a
              href="mailto:unete@comedordelospobres.org"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-2xl border border-purple-200 text-sm font-bold hover:bg-purple-50/50 transition"
            >
              <i className="far fa-envelope" /> unete@comedordelospobres.org
            </a>
          </div>
        </section>
      </main>

      {/* TESTIMONIO INSPIRACIONAL */}
      <section
        className="bg-purple-900 text-white py-12 px-6 mt-12 text-center relative overflow-hidden scroll-reveal"
        style={revealDelay(300)}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <blockquote className="text-xl md:text-2xl font-medium italic leading-relaxed mb-4">
            &quot;Después del verbo amar, el verbo ayudar es el más hermoso&quot;
          </blockquote>
          <cite className="text-sm font-black uppercase tracking-widest text-orange-400 block">
            Padre Roberto Infante
          </cite>
          <span className="text-xs text-purple-300 font-semibold block mt-1">
            Fundador de Comedor de los Pobres
          </span>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-800/60 via-purple-950 to-purple-950 opacity-40 pointer-events-none" />
      </section>
    </div>
  );
}
