import { ComedorGallery } from "@/components/comedores/ComedorGallery";
import type { Comedor } from "@/types/comedor.types";
import { revealDelay } from "@/lib/scrollRevealStyle";

interface ComedorStat {
  icon: string;
  iconColorClass: string;
  gradientClass: string;
  accentClass: string;
  label: string;
  value: string;
}

const COMEDOR_STATS: ComedorStat[] = [
  {
    icon: "fa-heart",
    iconColorClass: "text-brand",
    gradientClass: "from-purple-100 to-purple-50",
    accentClass: "",
    label: "Impacto",
    value: "Comunitario",
  },
  {
    icon: "fa-check-circle",
    iconColorClass: "text-orange-500",
    gradientClass: "from-orange-100 to-orange-50",
    accentClass: "card-accent-orange",
    label: "Servicio",
    value: "Lun-Sab",
  },
  {
    icon: "fa-shield-alt",
    iconColorClass: "text-yellow-600",
    gradientClass: "from-yellow-100 to-yellow-50",
    accentClass: "card-accent-yellow",
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
      <section className="py-10 md:py-12">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-stretch">
            <div className="flex flex-col lg:col-span-7">
              <div className="accent-border pl-6 mb-5 scroll-reveal" style={revealDelay(100)}>
                <h2 className="text-3xl font-black text-brand">{comedor.name}</h2>
              </div>
              <div
                className="space-y-4 text-sm text-gray-600 leading-relaxed scroll-reveal"
                style={revealDelay(200)}
              >
                {comedor.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-auto grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
                {COMEDOR_STATS.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`pillar-card bg-gradient-to-br ${stat.gradientClass} card-hover ${stat.accentClass} flex items-center gap-4 rounded-2xl p-6 scroll-reveal`}
                    style={revealDelay(300 + index * 100)}
                  >
                    <i
                      className={`pillar-icon fas ${stat.icon} ${stat.iconColorClass} text-3xl`}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-bold text-gray-500">{stat.label}</p>
                      <p className="text-xl font-black text-brand">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-100 p-5 shadow-xl scroll-reveal"
                style={revealDelay(400)}
              >
                <h3 className="mb-4 flex items-center gap-3 text-xl font-black text-brand">
                  <i className="pillar-icon fas fa-map-marker-alt text-3xl text-brand" aria-hidden="true" />
                  ¿Cómo llegar?
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{comedor.address}</p>
                <div className="relative mb-4 min-h-36 flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <iframe
                    src={`https://maps.google.com/maps?q=${comedor.mapsQuery}&hl=es&z=17&output=embed`}
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${comedor.name}`}
                  />
                </div>
                <a
                  href={`https://www.google.com/maps/search/${comedor.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full cursor-pointer rounded-lg bg-brand py-3.5 text-center text-sm font-black tracking-wide text-white shadow-lg shadow-purple-200 transition hover:bg-brand-dark"
                >
                  Ver en Navegador
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between mb-6 scroll-reveal" style={revealDelay(100)}>
            <h2 className="text-3xl font-black text-brand">Galería {comedor.shortName}</h2>
            <div className="h-1 flex-grow mx-8 bg-gray-200 rounded-full hidden md:block" />
          </div>
          <div className="scroll-reveal" style={revealDelay(200)}>
            <ComedorGallery images={comedor.galleryImages} />
          </div>
        </div>
      </section>
    </>
  );
}
