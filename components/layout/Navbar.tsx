"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import type { NavLink } from "@/types/navigation.types";

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "INICIO" },
  { href: "/nosotros", label: "NOSOTROS" },
  { href: "/comedores", label: "COMEDORES" },
  { href: "/informe", label: "INFORME" },
  { href: "/contactanos", label: "CONTÁCTANOS" },
];

export function Navbar() {
  const pathname = usePathname();
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <>
      <nav className="glass-nav sticky top-0 w-full z-[110] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-3">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
              <Image
                src="/imagenes/logomorado.png"
                alt="Logo"
                width={40}
                height={40}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl text-purple-900 tracking-tighter">
                JUAN XXIII
              </span>
              <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">
                Comedor de los Pobres
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-bold ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donar"
              className="px-6 py-2.5 bg-orange-500 text-white rounded-full font-black text-sm hover:bg-orange-600 transition shadow-lg shadow-orange-200 cursor-pointer inline-flex items-center active:scale-95 duration-200"
            >
              DONAR
            </Link>
          </div>

          <button
            type="button"
            onClick={toggle}
            className="lg:hidden relative z-[120] p-2 -mr-2 rounded-xl text-purple-900 hover:bg-purple-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <i className="fas fa-times text-2xl" aria-hidden="true" />
            ) : (
              <i className="fas fa-bars text-2xl" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} onClose={close} navLinks={NAV_LINKS} />
    </>
  );
}
