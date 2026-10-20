"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ComedorGalleryProps {
  images: GalleryImage[];
}

interface ImageSize {
  width: number;
  height: number;
}

/** Vertical photos (taller than wide) are shown whole instead of being cropped to a 2:1 frame. */
const VERTICAL_ASPECT_RATIO_LIMIT = 1;

/**
 * Horizontal photos fill the stage ("cover"). Vertical photos are shown whole ("contain")
 * over a blurred copy of themselves, so they keep their vertical shape and are not cropped.
 */
function isVertical(size: ImageSize | undefined): boolean {
  if (!size) return false;
  return size.width / size.height < VERTICAL_ASPECT_RATIO_LIMIT;
}

/** Featured photo + thumbnail sidebar (horizontal strip on small screens). */
export function ComedorGallery({ images }: ComedorGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sizes, setSizes] = useState<Record<string, ImageSize>>({});
  const total = images.length;

  const recordSize = (src: string, element: HTMLImageElement): void => {
    const { naturalWidth, naturalHeight } = element;
    if (!naturalWidth || !naturalHeight) return;
    setSizes((current) =>
      current[src] ? current : { ...current, [src]: { width: naturalWidth, height: naturalHeight } },
    );
  };

  if (total === 0) return null;

  const goTo = (index: number): void => setActiveIndex((index + total) % total);

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-3 rounded-2xl border border-gray-200 bg-gray-100 p-3 shadow-xl lg:grid-cols-[minmax(0,1fr)_19rem]">
      {/* Featured photo */}
      <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-gray-200">
        {images.map((image, index) => {
          const size = sizes[image.src];
          const isContained = isVertical(size);
          return (
            <div
              key={image.src}
              aria-hidden={index !== activeIndex}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {isContained && (
                <Image
                  src={image.src}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="30vw"
                  className="scale-125 object-cover opacity-70 blur-2xl"
                />
              )}
              <div className="absolute inset-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className={isContained ? "object-contain" : "object-cover"}
                  onLoad={(event) => recordSize(image.src, event.currentTarget)}
                />
              </div>
            </div>
          );
        })}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

        <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-sm font-bold text-white backdrop-blur-sm">
          {activeIndex + 1} / {total}
        </span>

        <div className="absolute bottom-3 right-3 flex gap-2">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Foto anterior"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/80 text-brand backdrop-blur-sm transition hover:bg-white"
          >
            <i className="fas fa-chevron-left text-sm" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Foto siguiente"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/80 text-brand backdrop-blur-sm transition hover:bg-white"
          >
            <i className="fas fa-chevron-right text-sm" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Thumbnails: 2x3 grid beside the photo on desktop, 3x2 grid below on mobile */}
      <div className="grid grid-cols-3 gap-2 lg:h-full lg:min-h-0 lg:grid-cols-2 lg:grid-rows-3 lg:gap-3">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver foto ${index + 1}`}
              aria-current={isActive}
              className={`relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg ring-2 ring-offset-2 ring-offset-gray-100 transition lg:aspect-auto lg:h-full ${
                isActive ? "ring-brand" : "opacity-70 ring-transparent hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 33vw, 160px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
