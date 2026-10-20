"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SOCIAL_LINK_BASE_CLASSES =
  "w-9 h-9 rounded-lg flex items-center justify-center text-white hover:-translate-y-0.5 hover:shadow-md transition-all";

const FACEBOOK_LINK_CLASSES = `${SOCIAL_LINK_BASE_CLASSES} bg-[#1877F2]`;
const INSTAGRAM_LINK_CLASSES = `${SOCIAL_LINK_BASE_CLASSES} bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]`;
const YOUTUBE_LINK_CLASSES = `${SOCIAL_LINK_BASE_CLASSES} bg-[#FF0000]`;

const HEADING_CLASSES = "text-sm font-bold text-brand";

function HeadingAccent() {
  return <span className="block w-6 h-0.5 mt-2 bg-brand rounded-full" aria-hidden="true" />;
}

export function Footer() {
  useScrollReveal();

  return (
    <footer className="bg-[#faf8fd] border-t border-purple-100">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-10 py-8 lg:py-10 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
        <div className="w-full lg:max-w-[380px]">
          <Link href="/" className="flex items-center space-x-2.5 mb-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/imagenes/logomorado-navbar.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-black text-[19px] text-brand">Juan XXIII</span>
          </Link>
          <p className="text-gray-500 leading-relaxed text-sm">
            Asociación Civil dedicada a combatir la inseguridad alimentaria en las zonas más
            vulnerables.
          </p>
        </div>

        <div className="w-full lg:max-w-[340px] space-y-3">
          <div>
            <h4 className={HEADING_CLASSES}>Contacto Directo</h4>
            <HeadingAccent />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed flex items-start">
            <i className="fas fa-map-marker-alt mt-1 mr-2.5 text-xs text-brand" />
            <span>
              Castelar #1490 (Juan Pablo II),
              <br />
              Colonia Pio X, Monterrey, N.L. C.P 64710
            </span>
          </p>
        </div>

        <div className="w-full lg:max-w-[340px] space-y-3">
          <div>
            <h4 className={HEADING_CLASSES}>Nuestras Redes</h4>
            <HeadingAccent />
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://wa.me/528130954567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-lg bg-green-500 px-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-600"
            >
              <i className="fab fa-whatsapp text-base" aria-hidden="true" /> WhatsApp
            </a>
            <a
              href="https://www.facebook.com/www.comedordelospobres.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={FACEBOOK_LINK_CLASSES}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10V22h4v-8.5z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/Comedor_delospobres"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={INSTAGRAM_LINK_CLASSES}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@juanxxiiialserviciodelospo2206"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={YOUTUBE_LINK_CLASSES}
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
            className="h-20 lg:h-28 w-auto mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      <div className="border-t border-purple-100">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-10 py-4 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-400 gap-2 md:gap-4">
          <p>© {new Date().getFullYear()} Juan XXIII al Servicio de los Pobres A.C.</p>
          <Link href="/aviso-de-privacidad" className="hover:text-brand transition-colors">
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
