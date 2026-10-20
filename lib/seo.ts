import type { Metadata, Viewport } from "next";

export const SITE_NAME = "Comedor de los Pobres";
export const SITE_LOCALE = "es_MX";
export const BRAND_COLOR = "#592b97";

/** Default <title> of the home page (max. 60 characters). */
export const DEFAULT_TITLE = "Comedor de los Pobres | Juan XXIII en Nuevo León";
export const DEFAULT_DESCRIPTION =
  "Asociación Juan XXIII: el Comedor de los Pobres sirve comida digna y gratuita en 4 sedes de Nuevo León. Conoce nuestro trabajo, dona o sé voluntario.";

export interface SeoImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

/** Relative URLs are resolved to absolute ones by `metadataBase` (required for social previews). */
export const DEFAULT_SOCIAL_IMAGE: SeoImage = {
  url: "/imagenes/og-banner.jpg",
  width: 1200,
  height: 630,
  alt: "Comedor de los Pobres: personas compartiendo alimentos en una de nuestras sedes",
};

export const SITE_VIEWPORT: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: BRAND_COLOR,
};

/** Only the production deployment may be indexed; Vercel previews are kept out of search results. */
export function isIndexingAllowed(): boolean {
  const vercelEnvironment = process.env.VERCEL_ENV;
  return !vercelEnvironment || vercelEnvironment === "production";
}

function twitterHandles(): { site?: string; creator?: string } {
  const site = process.env.NEXT_PUBLIC_TWITTER_SITE?.trim();
  const creator = process.env.NEXT_PUBLIC_TWITTER_CREATOR?.trim();
  return {
    ...(site ? { site } : {}),
    ...(creator ? { creator } : {}),
  };
}

interface PageSeoOptions {
  /** Page title without the site suffix (the layout template appends it). Omit for the default title. */
  title?: string;
  description?: string;
  /** Path of the page, used for the canonical and og:url, e.g. "/nosotros". */
  path?: string;
  image?: SeoImage;
  noIndex?: boolean;
}

/** Full metadata of a page: canonical, robots, Open Graph and Twitter Card, with safe fallbacks. */
export function buildPageMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_SOCIAL_IMAGE,
  noIndex = false,
}: PageSeoOptions = {}): Metadata {
  const pageTitle = title?.trim() || undefined;
  const pageDescription = description?.trim() || DEFAULT_DESCRIPTION;
  const socialTitle = pageTitle ? `${pageTitle} | ${SITE_NAME}` : DEFAULT_TITLE;
  const canIndex = !noIndex && isIndexingAllowed();

  return {
    title: pageTitle ?? { absolute: DEFAULT_TITLE },
    description: pageDescription,
    alternates: { canonical: path },
    robots: canIndex
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      title: socialTitle,
      description: pageDescription,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: pageDescription,
      images: [{ url: image.url, alt: image.alt }],
      ...twitterHandles(),
    },
  };
}
