import { resolveSiteUrl } from "@/lib/siteUrl";
import { SITE_NAME } from "@/lib/seo";

type JsonLdNode = Record<string, unknown>;

/**
 * Datos estructurados (schema.org) que le dicen a buscadores como Google
 * explícitamente que este sitio pertenece a una organización sin fines de
 * lucro, con su información de contacto.
 */
function buildOrganizationSchema(siteUrl: string): JsonLdNode {
  return {
    "@type": "NGO",
    "@id": new URL("#organization", siteUrl).toString(),
    name: "Juan XXIII al Servicio de los Pobres A.C.",
    alternateName: SITE_NAME,
    url: siteUrl,
    logo: new URL("/imagenes/logomorado.png", siteUrl).toString(),
    description:
      "Asociación Civil dedicada a combatir la inseguridad alimentaria en las zonas más vulnerables de Nuevo León.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Castelar #1490 (Juan Pablo II), Colonia Pio X",
      addressLocality: "Monterrey",
      addressRegion: "N.L.",
      postalCode: "64710",
      addressCountry: "MX",
    },
    telephone: "+52-81-8375-1163",
    email: "unete@comedordelospobres.org",
    sameAs: [
      "https://www.facebook.com/www.comedordelospobres.org",
      "https://www.instagram.com/Comedor_delospobres",
      "https://www.youtube.com/@juanxxiiialserviciodelospo2206",
    ],
  };
}

function buildWebSiteSchema(siteUrl: string): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": new URL("#website", siteUrl).toString(),
    name: SITE_NAME,
    url: siteUrl,
    inLanguage: "es-MX",
    publisher: { "@id": new URL("#organization", siteUrl).toString() },
  };
}

/** Organization + WebSite as a single JSON-LD graph. */
export function buildStructuredData(): JsonLdNode {
  const siteUrl = resolveSiteUrl().toString();

  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationSchema(siteUrl), buildWebSiteSchema(siteUrl)],
  };
}

/** JSON for a <script type="application/ld+json">; "<" is escaped so the data can never close the tag. */
export function serializeJsonLd(data: JsonLdNode): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
