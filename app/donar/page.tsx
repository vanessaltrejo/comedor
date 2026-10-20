import type { Metadata } from "next";
import { PaymentMethodsSection } from "@/components/donar/PaymentMethodsSection";
import { revealDelay } from "@/lib/scrollRevealStyle";
import { PageHero } from "@/components/layout/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Donar: transferencia y PayPal",
  description:
    "Dona al Comedor de los Pobres por transferencia bancaria (BanBajío, Afirme) o PayPal. Donataria autorizada con recibos deducibles de impuestos.",
  path: "/donar",
});

export default function Donar() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO / INTRODUCCIÓN PSICOLÓGICA */}
      <PageHero
        titleBefore="Alimenta la"
        titleHighlight="Esperanza"
        subtitle="Con tu donación compras la materia prima para preparar alimentos calientes y dignos. Cada aportación se traduce directamente en nutrición y amor para quien más lo necesita."
      />

      {/* SECCIÓN PRINCIPAL DE DONACIÓN */}
      <main className="relative z-20 mx-auto max-w-[90rem] px-4 pb-12 pt-12 sm:px-6 lg:px-10">
        <PaymentMethodsSection />

        {/* SECCIÓN DE TRANSPARENCIA Y CONFIANZA */}
        <section
          className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-gray-200 bg-gray-100 px-6 py-7 shadow-md md:flex-row lg:px-10 scroll-reveal"
          style={revealDelay(200)}
        >
          <div className="text-center md:text-left">
            <h3 className="mb-2 flex items-center justify-center gap-3 text-xl font-black text-brand md:justify-start">
              <i className="pillar-icon fas fa-receipt text-3xl text-brand" aria-hidden="true" />
              ¿Tienes alguna duda o necesitas un Recibo Deducible?
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
              Si requieres un comprobante fiscal para deducir impuestos en México, por favor
              envíanos tu comprobante de transferencia y datos fiscales por correo o WhatsApp.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a
              href="https://wa.me/528130954567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-green-200 transition hover:-translate-y-0.5 hover:bg-green-600"
            >
              <i className="fab fa-whatsapp text-lg" aria-hidden="true" /> Reportar por WhatsApp
            </a>
            <a
              href="mailto:unete@comedordelospobres.org"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-200 bg-white px-6 py-3 text-sm font-bold text-brand transition hover:-translate-y-0.5 hover:bg-purple-50"
            >
              <i className="far fa-envelope" aria-hidden="true" /> unete@comedordelospobres.org
            </a>
          </div>
        </section>
      </main>

      {/* TESTIMONIO INSPIRACIONAL */}
      <section className="mx-auto max-w-[90rem] px-4 pb-12 sm:px-6 lg:px-10">
        <div className="cta-banner mx-auto max-w-4xl px-6 py-10 text-center scroll-reveal" style={revealDelay(300)}>
          <div className="relative z-10 mx-auto max-w-3xl">
            <blockquote className="mb-3 text-xl font-medium italic leading-relaxed md:text-2xl">
              &quot;Después del verbo amar, el verbo ayudar es el más hermoso&quot;
            </blockquote>
            <cite className="block text-sm font-black not-italic tracking-wide text-orange-400">
              Padre Roberto Infante
            </cite>
            <span className="mt-1 block text-sm font-semibold text-purple-100">
              Fundador de Comedor de los Pobres
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
