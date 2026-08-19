"use client";

import { BankCard } from "@/components/donar/BankCard";
import { Toast } from "@/components/ui/Toast";
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
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12 scroll-reveal" style={revealDelay(100)}>
          <h2 className="text-3xl font-black text-purple-900">Métodos Oficiales de Donación</h2>
          <p className="text-gray-500 text-sm mt-1">
            Elige la opción que sea más práctica y cómoda para ti
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto bg-white p-8 rounded-[2rem] border border-purple-50 text-center shadow-sm mb-12 scroll-reveal"
          style={revealDelay(200)}
        >
          <h2 className="text-purple-900 font-black text-xl mb-4">Información para Donativos</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <div className="text-sm">
              <span className="text-gray-400 block uppercase text-[10px] font-bold tracking-widest mb-1">
                Titular
              </span>
              <span className="font-bold text-gray-700">
                Juan XXIII al Servicio de los Pobres, A.C.
              </span>
            </div>
            <div className="hidden md:block w-px h-10 bg-slate-100" />
            <div className="text-sm">
              <span className="text-gray-400 block uppercase text-[10px] font-bold tracking-widest mb-1">
                RFC
              </span>
              <span className="font-bold text-gray-700 flex items-center justify-center gap-2">
                {RFC}
                <button
                  type="button"
                  onClick={() => handleCopy(RFC, "RFC")}
                  className="text-purple-500 hover:text-purple-700 focus:outline-none"
                  title="Copiar RFC"
                  aria-label="Copiar RFC"
                >
                  <i className="far fa-copy text-xs" aria-hidden="true" />
                </button>
              </span>
            </div>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100">
            <i className="fas fa-check-circle text-green-600" aria-hidden="true" />
            Donataria autorizada (Recibos deducibles)
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          <BankCard
            bank={BANBAJIO_ACCOUNT}
            optionLabel="Opción 01"
            logo={<span className="font-black text-xl italic">B</span>}
            accentClasses={{
              topBorder: "border-purple-500",
              corner: "bg-purple-500/5",
              logoBox: "bg-purple-50 text-purple-600",
              badge: "text-purple-400 bg-purple-50",
            }}
            revealDelayMs={300}
            onCopy={handleCopy}
          />

          <BankCard
            bank={AFIRME_ACCOUNT}
            optionLabel="Opción 02"
            logo={<i className="fas fa-university text-lg" aria-hidden="true" />}
            accentClasses={{
              topBorder: "border-green-500",
              corner: "bg-green-500/5",
              logoBox: "bg-green-50 text-green-600",
              badge: "text-green-600 bg-green-50",
            }}
            revealDelayMs={450}
            onCopy={handleCopy}
          />

          {/* PayPal: no es una cuenta bancaria copiable, sino un formulario externo */}
          <div
            className="bank-card-premium p-8 relative overflow-hidden border-t-8 border-blue-500 flex flex-col justify-between scroll-reveal"
            style={revealDelay(600)}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
                  <i className="fab fa-paypal text-lg" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-widest">
                  Opción 03
                </span>
              </div>

              <h3 className="text-2xl font-black text-purple-900 mb-4">PayPal</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Donativo rápido con tu tarjeta de crédito, débito o saldo PayPal de manera segura
                y encriptada.
              </p>

              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
                className="w-full mt-4"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="4DESX3LB9LFRC" />

                <button
                  type="submit"
                  className="w-full py-3.5 bg-orange-500 text-white rounded-full font-black text-sm hover:bg-orange-600 transition shadow-lg shadow-orange-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Proceder al Pago Seguro <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-center gap-4 text-[9px] font-bold text-gray-400 uppercase tracking-wider">
              <span>
                <i className="fas fa-lock text-green-500" aria-hidden="true" /> Conexión SSL
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
