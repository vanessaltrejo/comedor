"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Footer() {
  useScrollReveal();

  return (
    <footer className="bg-white border-t border-gray-100 pt-10 lg:pt-20 scroll-reveal">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 pb-10 lg:pb-16">
        <div className="w-full lg:max-w-[280px]">
          <Link href="/" className="flex items-center space-x-3 mb-4 lg:mb-6">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
              <Image
                src="/imagenes/logomorado.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-black text-2xl text-purple-900">JUAN XXIII</span>
          </Link>
          <p className="text-gray-500 leading-relaxed text-sm">
            Asociación Civil dedicada a combatir la inseguridad alimentaria en las zonas más
            vulnerables.
          </p>
        </div>

        <div className="w-full lg:max-w-[280px] space-y-3 lg:space-y-4">
          <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest border-l-4 border-yellow-400 pl-4">
            Contacto Directo
          </h4>
          <p className="text-gray-600 text-sm flex items-start">
            <i className="fas fa-map-marker-alt mt-1 mr-3 text-purple-600" />
            Castelar #1490 (Juan Pablo II),
            <br />
            Colonia Pio X, Monterrey, N.L. C.P 64710
          </p>
          <a
            href="https://wa.me/528130954567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-full font-bold text-sm hover:bg-green-600 transition-colors"
          >
            <i className="fab fa-whatsapp text-lg" /> WhatsApp
          </a>
        </div>

        <div className="w-full lg:max-w-[280px] space-y-3 lg:space-y-4">
          <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest border-l-4 border-purple-600 pl-4">
            Nuestras Redes
          </h4>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/www.comedordelospobres.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10V22h4v-8.5z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/Comedor_delospobres"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@juanxxiiialserviciodelospo2206"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-auto flex items-center lg:justify-end">
          <Image
            src="/imagenes/jbpnl.jpg"
            alt="Junta de Beneficencia Privada de Nuevo León"
            width={480}
            height={360}
            className="h-20 lg:h-28 w-auto"
          />
        </div>
      </div>

      <div className="bg-gray-50 py-5 lg:py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4 text-xs font-bold">
          <p>© 2024 Juan XXIII al Servicio de los Pobres A.C.</p>
        </div>
      </div>
    </footer>
  );
}
