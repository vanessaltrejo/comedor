import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad - Comedor de los Pobres",
  description:
    "Aviso de privacidad de Juan XXIII al Servicio de los Pobres A.C. sobre el manejo de datos personales.",
};

export default function AvisoDePrivacidad() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-black text-purple-900 mb-8">
          Aviso de Privacidad
        </h1>

        <div className="prose prose-lg text-gray-600 max-w-none space-y-6 leading-relaxed">
          <p>
            <strong>Juan XXIII al Servicio de los Pobres A.C.</strong>, con domicilio en Castelar
            #1490 (Juan Pablo II), Colonia Pio X, Monterrey, N.L., C.P. 64710, es responsable del
            uso y protección de los datos personales que nos proporciones a través de este sitio,
            de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares.
          </p>

          <h2 className="text-xl font-black text-purple-900 mt-10 mb-2">
            ¿Qué datos recabamos?
          </h2>
          <p>
            A través del formulario de contacto de este sitio recabamos únicamente tu nombre,
            correo electrónico, asunto y el mensaje que decidas escribirnos. No solicitamos datos
            financieros, sensibles ni de ningún otro tipo en este sitio.
          </p>

          <h2 className="text-xl font-black text-purple-900 mt-10 mb-2">
            ¿Para qué usamos tus datos?
          </h2>
          <p>Usamos tu información únicamente para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Responder a tus dudas, solicitudes de voluntariado o donación en especie.</li>
            <li>Dar seguimiento a la comunicación que inicies con nosotros.</li>
          </ul>
          <p>No usamos tus datos con fines publicitarios ni los compartimos con terceros ajenos a la operación de este sitio.</p>

          <h2 className="text-xl font-black text-purple-900 mt-10 mb-2">
            ¿Con quién compartimos tu información?
          </h2>
          <p>
            El mensaje que envías a través del formulario se transmite mediante{" "}
            <a
              href="https://resend.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-bold hover:underline"
            >
              Resend
            </a>
            , el servicio que utilizamos para el envío de correos electrónicos, únicamente como
            medio técnico para hacernos llegar tu mensaje.
          </p>

          <h2 className="text-xl font-black text-purple-900 mt-10 mb-2">
            Derechos ARCO
          </h2>
          <p>
            Tienes derecho a acceder, rectificar o cancelar tus datos personales, así como a
            oponerte al uso de los mismos (derechos ARCO). Para ejercer cualquiera de estos
            derechos, escríbenos a{" "}
            <a
              href="mailto:unete@comedordelospobres.org"
              className="text-purple-600 font-bold hover:underline"
            >
              unete@comedordelospobres.org
            </a>
            .
          </p>

          <h2 className="text-xl font-black text-purple-900 mt-10 mb-2">
            Cambios a este aviso
          </h2>
          <p>
            Este aviso de privacidad puede actualizarse ante cambios en nuestras prácticas o
            requerimientos legales. Cualquier modificación se publicará en esta misma página.
          </p>

          <p className="text-sm text-gray-400 mt-10">Última actualización: agosto de 2026.</p>
        </div>
      </div>
    </main>
  );
}
