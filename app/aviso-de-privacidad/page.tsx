import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { revealDelay } from "@/lib/scrollRevealStyle";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de Juan XXIII al Servicio de los Pobres A.C. sobre el manejo de datos personales.",
  path: "/aviso-de-privacidad",
});

const LINK_CLASSES = "font-bold text-brand hover:underline";

interface PrivacySectionProps {
  number: number;
  title: string;
  children: ReactNode;
  className?: string;
}

function PrivacySection({ number, title, children, className = "" }: PrivacySectionProps) {
  return (
    <section
      className={`rounded-2xl border border-gray-200 bg-gray-100 p-5 shadow-md md:p-6 scroll-reveal ${className}`}
      style={revealDelay(number * 80)}
    >
      <h2 className="mb-2.5 flex items-center gap-3 text-lg font-black text-brand">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-black text-white"
          aria-hidden="true"
        >
          {number}
        </span>
        {title}
      </h2>
      <div className="space-y-2.5 text-sm leading-relaxed text-gray-700">{children}</div>
    </section>
  );
}

export default function AvisoDePrivacidad() {
  return (
    <>
      <PageHero
        titleBefore="Aviso de"
        titleHighlight="Privacidad"
        subtitle="Uso y protección de tus datos personales, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares."
      />

      <main className="mx-auto max-w-[90rem] px-4 py-10 sm:px-6 md:py-12 lg:px-10">
        <div
          className="mb-6 rounded-2xl border border-gray-200 border-l-4 border-l-brand bg-gray-100 p-5 shadow-md md:p-6 scroll-reveal"
          style={revealDelay(0)}
        >
          <p className="text-sm leading-relaxed text-gray-700">
            <strong>Juan XXIII al Servicio de los Pobres A.C.</strong>, con domicilio en Castelar
            #1490 (Juan Pablo II), Colonia Pio X, Monterrey, N.L., C.P. 64710, es responsable del
            uso y protección de los datos personales que nos proporciones a través de este sitio,
            de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[11fr_13fr]">
          <PrivacySection number={1} title="¿Qué datos recabamos?">
            <p>
              A través del formulario de contacto de este sitio recabamos únicamente tu nombre,
              correo electrónico, asunto y el mensaje que decidas escribirnos. No solicitamos datos
              financieros, sensibles ni de ningún otro tipo en este sitio.
            </p>
          </PrivacySection>

          <PrivacySection number={2} title="¿Para qué usamos tus datos?">
            <p>Usamos tu información únicamente para:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Responder a tus dudas, solicitudes de voluntariado o donación en especie.</li>
              <li>Dar seguimiento a la comunicación que inicies con nosotros.</li>
            </ul>
            <p>
              No usamos tus datos con fines publicitarios ni los compartimos con terceros ajenos a
              la operación de este sitio.
            </p>
          </PrivacySection>

          <PrivacySection number={3} title="¿Con quién compartimos tu información?">
            <p>
              El mensaje que envías a través del formulario se transmite mediante{" "}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_CLASSES}
              >
                Resend
              </a>
              , el servicio que utilizamos para el envío de correos electrónicos, únicamente como
              medio técnico para hacernos llegar tu mensaje.
            </p>
          </PrivacySection>

          <PrivacySection number={4} title="Derechos ARCO">
            <p>
              Tienes derecho a acceder, rectificar o cancelar tus datos personales, así como a
              oponerte al uso de los mismos (derechos ARCO). Para ejercer cualquiera de estos
              derechos, escríbenos a{" "}
              <a href="mailto:unete@comedordelospobres.org" className={LINK_CLASSES}>
                unete@comedordelospobres.org
              </a>
              .
            </p>
          </PrivacySection>

          <section
            className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-100 px-5 py-4 shadow-md md:col-span-2 md:flex-row md:items-center md:justify-between md:px-6 scroll-reveal"
            style={revealDelay(5 * 80)}
          >
            <div>
              <h2 className="mb-1 flex items-center gap-3 text-lg font-black text-brand">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-black text-white"
                  aria-hidden="true"
                >
                  5
                </span>
                Cambios a este aviso
              </h2>
              <p className="text-sm leading-relaxed text-gray-700">
                Este aviso de privacidad puede actualizarse ante cambios en nuestras prácticas o
                requerimientos legales. Cualquier modificación se publicará en esta misma página.
              </p>
            </div>
            <p className="shrink-0 self-start rounded-full bg-white px-5 py-2 text-sm font-bold text-gray-600 shadow-sm ring-1 ring-black/5 md:self-center">
              Última actualización: agosto de 2026.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
