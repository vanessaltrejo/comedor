"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { revealDelay } from "@/lib/scrollRevealStyle";

type SlideDirection = "next" | "prev";

const SLIDE_COUNT = 2;
const AUTO_ROTATE_MS = 5000;

/**
 * Reproduce la lógica del carousel original (2 slides fijos): el slide activo
 * siempre lleva 'slide-3d-active'; el otro slide descansa en 'left' o 'right'
 * según la dirección de la última transición, lo que dispara la animación CSS
 * definida en globals.css (transition en .slide-3d).
 */
function getRestingClass(direction: SlideDirection): "slide-3d-left" | "slide-3d-right" {
  return direction === "next" ? "slide-3d-left" : "slide-3d-right";
}

export function AnnouncementCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>("prev");
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const goToSlide = useCallback((index: number, nextDirection: SlideDirection) => {
    setActiveIndex(index);
    setDirection(nextDirection);
  }, []);

  const startAutoRotate = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % SLIDE_COUNT;
        setDirection(nextIndex === 0 ? "prev" : "next");
        return nextIndex;
      });
    }, AUTO_ROTATE_MS);
  }, []);

  const resetAutoRotate = useCallback(() => {
    startAutoRotate();
  }, [startAutoRotate]);

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % SLIDE_COUNT, "next");
    resetAutoRotate();
  }, [activeIndex, goToSlide, resetAutoRotate]);

  const prevSlide = useCallback(() => {
    goToSlide((activeIndex - 1 + SLIDE_COUNT) % SLIDE_COUNT, "prev");
    resetAutoRotate();
  }, [activeIndex, goToSlide, resetAutoRotate]);

  useEffect(() => {
    startAutoRotate();
    return () => clearInterval(intervalRef.current);
  }, [startAutoRotate]);

  const pauseAutoRotate = useCallback(() => clearInterval(intervalRef.current), []);

  const isDarkSlideActive = activeIndex === 0;

  const arrowBaseClass =
    "absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center focus:outline-none transition z-20 cursor-pointer shadow-md border";
  const arrowDarkClass = "bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/40";
  const arrowLightClass = "bg-purple-100 hover:bg-purple-200 border-purple-200/50 text-purple-700";

  const prevArrowClass = `${arrowBaseClass} left-4 ${isDarkSlideActive ? `${arrowDarkClass} opacity-0 pointer-events-none` : arrowLightClass}`;
  const nextArrowClass = `${arrowBaseClass} right-4 ${isDarkSlideActive ? arrowDarkClass : `${arrowLightClass} opacity-0 pointer-events-none`}`;

  const carreraSlideClass = `announcement-slide slide-3d ${
    activeIndex === 0 ? "slide-3d-active" : getRestingClass(direction)
  } p-8 md:p-12 bg-gradient-to-r from-purple-900 to-purple-800 flex items-center`;

  const informeSlideClass = `announcement-slide slide-3d ${
    activeIndex === 1 ? "slide-3d-active" : getRestingClass(direction)
  } p-8 md:p-12 bg-gray-50 flex items-center`;

  return (
    <div
      className="relative overflow-hidden rounded-[3rem] shadow-xl border border-gray-100 bg-white min-h-[600px] xs:min-h-[580px] sm:min-h-[540px] md:min-h-[480px] lg:min-h-[420px] xl:min-h-[380px] scroll-reveal"
      style={revealDelay(100)}
      onMouseEnter={pauseAutoRotate}
      onMouseLeave={startAutoRotate}
    >
      {/* SLIDE 1: Carrera */}
      <div id="slide-carrera" className={carreraSlideClass}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -mr-20 -mt-20" />
        <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <Image
              src="/imagenes/correyalimenta.webp"
              alt="Carrera"
              width={900}
              height={977}
              loading="lazy"
              className="w-full max-h-[160px] sm:max-h-[200px] lg:max-h-[250px] object-cover rounded-[2rem] shadow-xl -rotate-1 hover:rotate-0 transition duration-500"
            />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-orange-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-1 border border-white/10">
              <i className="fas fa-running" /> Evento con Causa
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">
              Corre y Alimenta la <span className="text-orange-500">Esperanza</span>
            </h2>
            <p className="text-purple-100 text-sm md:text-base leading-relaxed opacity-90">
              Participa en nuestra carrera anual. Todo lo recaudado se destina directamente al
              sostenimiento de nuestros comedores y la compra de alimentos para quienes más lo
              necesitan.
            </p>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/correyalimentalaesperanza?igsh=YTdmcXRzMGdjMmJz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-full font-black text-xs hover:bg-orange-600 transition shadow-lg shadow-orange-950/50 gap-3 group uppercase tracking-widest active:scale-95 duration-150 cursor-pointer"
              >
                <span>Ver en Instagram</span>
                <i className="fab fa-instagram text-base group-hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDE 2: Informe */}
      <div id="slide-informe" className={informeSlideClass}>
        <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <Image
              src="/imagenes/informeactividades.jpg"
              alt="Reporte"
              width={1536}
              height={1024}
              loading="lazy"
              className="w-full max-h-[160px] sm:max-h-[200px] lg:max-h-[250px] object-cover rounded-[2rem] shadow-xl rotate-1 hover:rotate-0 transition duration-500"
            />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-1 border border-purple-100">
              <i className="fas fa-file-alt" /> Transparencia
            </div>
            <h3 className="text-3xl lg:text-4xl font-black text-purple-900 leading-tight">
              Informe Anual 2025
            </h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              Periodo Enero - Diciembre 2025
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed opacity-90 max-w-xl mx-auto lg:mx-0">
              La transparencia es el pilar de nuestra confianza. Consulta nuestros logros y el
              impacto directo que hemos generado gracias a tu apoyo constante.
            </p>
            <div className="pt-2">
              <a
                href="/informe/Informe 2025.pdf"
                download="Informe-Anual-2025.pdf"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-700 transition shadow-lg shadow-purple-200 mx-auto lg:mx-0 text-xs active:scale-95 duration-150 cursor-pointer"
              >
                <i className="fas fa-file-pdf mr-3" /> DESCARGAR REPORTE PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      <button type="button" onClick={prevSlide} className={prevArrowClass} id="carousel-prev">
        <i className="fas fa-chevron-left text-sm" />
      </button>
      <button type="button" onClick={nextSlide} className={nextArrowClass} id="carousel-next">
        <i className="fas fa-chevron-right text-sm" />
      </button>
    </div>
  );
}
