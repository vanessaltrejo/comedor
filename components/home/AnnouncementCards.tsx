import Image from "next/image";
import { revealDelay } from "@/lib/scrollRevealStyle";

const CARD_BASE_CLASSES =
  "relative flex flex-col overflow-hidden rounded-2xl shadow-xl border card-hover scroll-reveal";
const CARD_IMAGE_CLASSES = "object-cover";

export function AnnouncementCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {/* CARD 1: Carrera */}
      <article
        id="slide-carrera"
        className={`${CARD_BASE_CLASSES} bg-gray-100 border-gray-200`}
        style={revealDelay(100)}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src="/imagenes/correyalimenta.webp"
            alt="Carrera"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className={CARD_IMAGE_CLASSES}
          />
        </div>

        <div className="relative z-10 flex flex-1 flex-col gap-3 p-6 md:p-7">
          <div className="inline-flex w-fit items-center gap-2 px-3 py-1 bg-white text-brand rounded-full text-sm font-black tracking-wide border border-purple-100">
            <i className="fas fa-running" /> Evento con Causa
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-brand leading-tight">
            Corre y Alimenta la Esperanza
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Participa en nuestra carrera anual. Todo lo recaudado se destina directamente al
            sostenimiento de nuestros comedores y la compra de alimentos para quienes más lo
            necesitan.
          </p>
          <div className="mt-auto pt-2">
            <a
              href="https://www.instagram.com/correyalimentalaesperanza?igsh=YTdmcXRzMGdjMmJz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-brand text-white rounded-lg font-black text-sm hover:bg-brand-dark transition shadow-lg shadow-purple-200 gap-3 group/btn tracking-wide active:scale-95 duration-150 cursor-pointer"
            >
              <span>Ver en Instagram</span>
              <i className="fab fa-instagram text-base group-hover/btn:scale-110 transition" />
            </a>
          </div>
        </div>
      </article>

      {/* CARD 2: Informe */}
      <article
        id="slide-informe"
        className={`${CARD_BASE_CLASSES} bg-gray-100 border-gray-200`}
        style={revealDelay(250)}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src="/imagenes/informeactividades.jpg"
            alt="Reporte"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className={CARD_IMAGE_CLASSES}
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
          <div className="inline-flex w-fit items-center gap-2 px-3 py-1 bg-white text-brand rounded-full text-sm font-black tracking-wide border border-purple-100">
            <i className="fas fa-file-alt" /> Transparencia
          </div>
          <h3 className="text-2xl lg:text-3xl font-black text-brand leading-tight">
            Informe Anual 2025
          </h3>
          <p className="text-sm text-gray-500 font-bold tracking-wide">
            Periodo Enero - Diciembre 2025
          </p>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
            La transparencia es el pilar de nuestra confianza. Consulta nuestros logros y el
            impacto directo que hemos generado gracias a tu apoyo constante.
          </p>
          <div className="mt-auto pt-2">
            <a
              href="/informe/Informe 2025.pdf"
              download="Informe-Anual-2025.pdf"
              className="inline-flex items-center px-6 py-3 bg-brand text-white font-black rounded-lg hover:bg-brand-dark transition shadow-lg shadow-purple-200 text-sm active:scale-95 duration-150 cursor-pointer"
            >
              <i className="fas fa-file-pdf mr-3" /> Descargar reporte PDF
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
