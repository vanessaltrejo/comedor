import type { NextConfig } from "next";

/**
 * Rutas que el sitio anterior (Express) también servía con sufijo `.html`.
 * Se redirigen de forma permanente para no romper enlaces ya publicados
 * (buscadores, redes sociales, material impreso).
 */
const LEGACY_HTML_ROUTES = [
  "index",
  "nosotros",
  "comedores",
  "informe",
  "donar",
  "contactanos",
];

const nextConfig: NextConfig = {
  async redirects() {
    return LEGACY_HTML_ROUTES.map((route) => ({
      source: `/${route}.html`,
      destination: route === "index" ? "/" : `/${route}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
