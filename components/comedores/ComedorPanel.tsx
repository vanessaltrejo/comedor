import Image from "next/image";
import type { Comedor } from "@/types/comedor.types";
import { revealDelay } from "@/lib/scrollRevealStyle";

interface ComedorStat {
  icon: string;
  iconColorClass: string;
  bgColorClass: string;
  label: string;
  value: string;
}

const COMEDOR_STATS: ComedorStat[] = [
  {
    icon: "fa-heart",
    iconColorClass: "text-purple-600",
    bgColorClass: "bg-purple-50",
    label: "Impacto",
    value: "Comunitario",
  },
  {
    icon: "fa-check-circle",
    iconColorClass: "text-orange-500",
    bgColorClass: "bg-orange-50",
    label: "Servicio",
    value: "Lun-Sab",
  },
  {
    icon: "fa-shield-alt",
    iconColorClass: "text-yellow-500",
    bgColorClass: "bg-yellow-50",
    label: "Apoyo",
    value: "Gratuito",
  },
];

interface ComedorPanelProps {
  comedor: Comedor;
}

export function ComedorPanel({ comedor }: ComedorPanelProps) {
  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            <div className="lg:col-span-7">
              <div className="accent-border pl-8 mb-12 scroll-reveal" style={revealDelay(100)}>
                <span className="text-orange-500 font-black uppercase tracking-widest text-sm">
                  Información General
                </span>
                <h2 className="text-4xl font-black text-purple-900 mt-2">{comedor.name}</h2>
              </div>
              <div
                className="space-y-6 text-lg text-gray-600 leading-relaxed scroll-reveal"
                style={revealDelay(200)}
              >
                {comedor.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10 scroll-reveal" style={revealDelay(300)}>
                {COMEDOR_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className={`p-6 ${stat.bgColorClass} rounded-3xl border border-gray-100 text-center md:text-left`}
                  >
                    <i className={`fas ${stat.icon} ${stat.iconColorClass} mb-3 text-xl`} />
                    <p className="text-sm font-bold text-gray-400 uppercase">{stat.label}</p>
                    <p className="text-xl font-black text-gray-900">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-purple-900/10 border border-purple-50 scroll-reveal"
                style={revealDelay(400)}
              >
                <h3 className="text-2xl font-black text-purple-900 mb-8 flex items-center">
                  <span className="w-2 h-8 bg-yellow-400 rounded-full mr-4" />
                  ¿Cómo llegar?
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Dirección</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{comedor.address}</p>
                    </div>
                  </div>
                  <div className="rounded-[2rem] overflow-hidden h-48 bg-gray-100 border border-gray-200 relative">
                    <iframe
                      src={`https://maps.google.com/maps?q=${comedor.mapsQuery}&hl=es&z=17&output=embed`}
                      className="w-full h-full border-0 absolute inset-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/${comedor.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-5 bg-purple-600 text-white text-center font-black rounded-2xl hover:bg-purple-700 transition shadow-xl shadow-purple-200 uppercase tracking-widest text-sm cursor-pointer"
                  >
                    Ver en Navegador
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-12 scroll-reveal" style={revealDelay(100)}>
            <h2 className="text-4xl font-black text-purple-900">Galería {comedor.shortName}</h2>
            <div className="h-1 flex-grow mx-8 bg-gray-200 rounded-full hidden md:block" />
          </div>
          <div className="gallery-grid scroll-reveal" style={revealDelay(200)}>
            {comedor.galleryImages.map((image) => (
              <div
                key={image.src}
                className="gallery-item relative rounded-[2rem] overflow-hidden shadow-lg group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
