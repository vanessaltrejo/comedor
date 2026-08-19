export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Comedor {
  slug: string;
  name: string;
  shortName: string;
  description: string[];
  address: string;
  /** Query ya formateada con '+' para las URLs de Google Maps (embed y "ver en navegador"). */
  mapsQuery: string;
  galleryImages: GalleryImage[];
}
