"use client";

import { useState } from "react";
import type { Comedor } from "@/types/comedor.types";
import { ComedorPanel } from "@/components/comedores/ComedorPanel";

interface ComedoresTabsProps {
  comedores: Comedor[];
}

export function ComedoresTabs({ comedores }: ComedoresTabsProps) {
  const [activeSlug, setActiveSlug] = useState(comedores[0]?.slug ?? "");

  return (
    <>
      <section className="pt-12 pb-4 bg-transparent sticky top-[80px] z-40">
        {/* Desktop: Sleek Capsule Navbar */}
        <div className="hidden sm:flex justify-center w-full">
          <div className="bg-gray-100/80 backdrop-blur-md p-2 rounded-full inline-flex space-x-3 whitespace-nowrap shadow-lg border border-gray-200/20">
            {comedores.map((comedor) => {
              const isActive = comedor.slug === activeSlug;
              return (
                <button
                  key={comedor.slug}
                  type="button"
                  onClick={() => setActiveSlug(comedor.slug)}
                  className={`tab-btn px-8 py-3 rounded-full text-sm md:text-base font-bold focus:outline-none flex items-center justify-center ${
                    isActive ? "active" : "text-gray-500 hover:text-purple-900"
                  }`}
                >
                  <i className="fas fa-map-marker-alt mr-2 text-purple-600" /> {comedor.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile: Compact Dropdown selector */}
        <div className="sm:hidden flex justify-center w-full px-4">
          <div className="relative w-full max-w-[280px]">
            <select
              value={activeSlug}
              onChange={(event) => setActiveSlug(event.target.value)}
              className="w-full bg-gray-100/90 backdrop-blur-md pl-12 pr-10 py-3.5 rounded-full font-bold text-purple-900 border border-gray-200 shadow-md appearance-none focus:outline-none cursor-pointer text-sm"
            >
              {comedores.map((comedor) => (
                <option key={comedor.slug} value={comedor.slug}>
                  {comedor.shortName}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5 text-purple-600 z-10">
              <i className="fas fa-map-marker-alt text-sm" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-purple-900 z-10">
              <i className="fas fa-chevron-down text-xs" />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        {comedores.map((comedor) => (
          <div
            key={comedor.slug}
            id={comedor.slug}
            className={`tab-content ${comedor.slug === activeSlug ? "active" : ""}`}
          >
            <ComedorPanel comedor={comedor} />
          </div>
        ))}
      </div>
    </>
  );
}
