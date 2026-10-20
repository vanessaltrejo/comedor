"use client";

import { BankCard } from "@/components/donar/BankCard";
import { Toast } from "@/components/ui/Toast";
import { toneCardClasses, toneIconClasses } from "@/components/ui/cardTones";
import { useToast } from "@/hooks/useToast";
import { copyText } from "@/lib/clipboard";
import { revealDelay } from "@/lib/scrollRevealStyle";
import { AFIRME_ACCOUNT, BANBAJIO_ACCOUNT } from "@/services/data/bankAccounts.data";

const RFC = "JXS-691024-U2A";
const TOAST_COPIED_MESSAGE =
  "Se ha copiado al portapapeles sin espacios para facilitar tu banca móvil.";
const TOAST_ERROR_MESSAGE = "Copia el número manualmente desde la pantalla.";

export function PaymentMethodsSection() {
  const { toast, showToast } = useToast();

  async function handleCopy(text: string, label: string): Promise<void> {
    try {
      await copyText(text);
      showToast(`¡${label} Copiado!`, TOAST_COPIED_MESSAGE);
    } catch (error) {
      // El portapapeles puede fallar (navegador sin permiso, contexto no
      // seguro...). Se avisa en pantalla para que el dato no parezca copiado.
      console.error("Error al copiar: ", error);
      showToast("No se pudo copiar", TOAST_ERROR_MESSAGE, "error");
    }
  }

  return (
    <>
      <section>
        <div className="mb-8 text-center scroll-reveal" style={revealDelay(100)}>
          <h2 className="text-3xl font-black text-brand">Métodos Oficiales de Donación</h2>
          <p className="mt-1 text-sm text-gray-600">
            Elige la opción que sea más práctica y cómoda para ti
          </p>
        </div>

        {/* Datos del titular */}
        <div
          className="mb-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-gray-200 bg-gray-100 px-6 py-6 shadow-md lg:flex-row lg:px-10 scroll-reveal"
          style={revealDelay(200)}
        >
          <h2 className="flex items-center gap-3 text-xl font-black text-brand">
            <i className="pillar-icon fas fa-file-invoice text-3xl text-brand" aria-hidden="true" />
            Información para Donativos
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <div className="rounded-2xl bg-white px-5 py-2.5 text-center shadow-sm ring-1 ring-black/5 sm:rounded-full">
              <span className="font-bold text-gray-500">Titular </span>
              <span className="font-bold text-gray-800">
                Juan XXIII al Servicio de los Pobres, A.C.
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-sm ring-1 ring-black/5">
              <span className="font-bold text-gray-500">RFC</span>
              <span className="font-bold text-gray-800">{RFC}</span>
              <button
                type="button"
                onClick={() => handleCopy(RFC, "RFC")}
                className="text-brand-light hover:text-brand-dark focus:outline-none"
                title="Copiar RFC"
                aria-label="Copiar RFC"
              >
                <i className="far fa-copy text-sm" aria-hidden="true" />
              </button>
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-5 py-2.5 text-center font-bold text-green-700 sm:rounded-full">
              <i className="fas fa-check-circle text-green-600" aria-hidden="true" />
              Donataria autorizada (Recibos deducibles)
            </div>
          </div>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          <BankCard
            bank={BANBAJIO_ACCOUNT}
            optionLabel="Opción 01"
            logo={<span className="font-black italic">B</span>}
            tone="purple"
            revealDelayMs={300}
            onCopy={handleCopy}
          />

          <BankCard
            bank={AFIRME_ACCOUNT}
            optionLabel="Opción 02"
            logo={<i className="fas fa-university" aria-hidden="true" />}
            tone="green"
            revealDelayMs={450}
            onCopy={handleCopy}
          />

          {/* PayPal: no es una cuenta bancaria copiable, sino un formulario externo */}
          <div
            className={`${toneCardClasses("blue", "rounded-3xl")} flex flex-col p-7 scroll-reveal`}
            style={revealDelay(600)}
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-3 text-2xl font-black text-brand">
                <i
                  className={`pillar-icon fab fa-paypal text-3xl ${toneIconClasses("blue")}`}
                  aria-hidden="true"
                />
                PayPal
              </h3>
              <span
                className={`rounded-full bg-white/80 px-3 py-1 text-sm font-black ring-1 ring-black/5 ${toneIconClasses("blue")}`}
              >
                Opción 03
              </span>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-gray-700">
              Donativo rápido con tu tarjeta de crédito, débito o saldo PayPal de manera segura y
              encriptada.
            </p>

            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
              className="w-full"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="4DESX3LB9LFRC" />

              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-orange-500 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
              >
                Proceder al Pago Seguro <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
              </button>
            </form>

            <div className="mt-auto flex flex-wrap justify-center gap-x-4 gap-y-1 border-t border-black/10 pt-5 text-sm font-bold text-gray-600">
              <span>
                <i className="fas fa-lock text-green-600" aria-hidden="true" /> Conexión SSL
              </span>
              <span>•</span>
              <span>
                <i className="fab fa-cc-visa" aria-hidden="true" /> Visa / MC / Amex
              </span>
            </div>
          </div>
        </div>
      </section>

      <Toast
        title={toast.title}
        message={toast.message}
        isVisible={toast.isVisible}
        variant={toast.variant}
      />
    </>
  );
}
