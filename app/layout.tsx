import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { resolveSiteUrl } from "@/lib/siteUrl";
import { buildOrganizationSchema } from "@/lib/organizationSchema";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const DEFAULT_TITLE = "Comedor de los Pobres";
const DEFAULT_DESCRIPTION =
  "Asociación Juan XXIII - Comedor de los Pobres P. Roberto Infante en Nuevo León.";
const DEFAULT_OG_IMAGE = {
  url: "/imagenes/og-banner.jpg",
  width: 1200,
  height: 630,
  alt: DEFAULT_TITLE,
};

export const metadata: Metadata = {
  metadataBase: resolveSiteUrl(),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: "/imagenes/logomorado.png",
  },
  openGraph: {
    type: "website",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect: acelera DNS lookup de iconos (fuente ya autohospedada por next/font) */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        {/* Font Awesome (se conserva vía CDN para mantener paridad visual exacta) */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          // Contenido generado por nosotros mismos (no es entrada de usuario), es el
          // patrón oficial de Next.js para insertar JSON-LD.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }}
        />
      </head>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
