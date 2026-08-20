import { resolveSiteUrl } from "@/lib/siteUrl";

/**
 * Datos estructurados (schema.org) que le dicen a buscadores como Google
 * explícitamente que este sitio pertenece a una organización sin fines de
 * lucro, con su información de contacto. Se serializa como JSON-LD en
 * el <head> del layout raíz.
 */
export function buildOrganizationSchema(): Record<string, unknown> {
  const siteUrl = resolveSiteUrl().toString();

  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Juan XXIII al Servicio de los Pobres A.C.",
    alternateName: "Comedor de los Pobres",
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
