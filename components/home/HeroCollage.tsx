"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

interface HeroPhoto {
  id: string;
  src: string;
  alt: string;
  isPriority: boolean;
  /** Final (resting) rotation in degrees. */
  restRotate: number;
  /** Where the photo starts, as a % of its own size, relative to its final spot (the centre of the stack). */
  fromX: number;
  fromY: number;
  /** Rotation while it sits in the stack, in degrees. */
  fromRotate: number;
  /** Stacking order while the photos are piled up (higher = on top). */
  stackOrder: number;
  /** Seconds before this photo leaves the stack. */
  enterDelay: number;
}

/** Two columns of equal-size photos; the right column sits lower for a staggered rhythm. */
const LEFT_COLUMN: HeroPhoto[] = [
  {
    id: "main",
    src: "/imagenes/fotoportada.webp",
    alt: "Comedor Social",
    isPriority: true,
    restRotate: 0,
    fromX: 53,
    fromY: 62,
    fromRotate: -8,
    stackOrder: 4,
    enterDelay: 0.5,
  },
  {
    id: "escobedo",
    src: "/imagenes/Comedor Escobedo/CE.6.webp",
    alt: "Comensales en el Comedor Escobedo",
    isPriority: false,
    restRotate: 0,
    fromX: 53,
    fromY: -45,
    fromRotate: 6,
    stackOrder: 2,
    enterDelay: 0.62,
  },
];

const RIGHT_COLUMN: HeroPhoto[] = [
  {
    id: "juarez",
    src: "/imagenes/Comedor Juarez/CJ.5.webp",
    alt: "Personas compartiendo alimentos en el Comedor Juárez",
    isPriority: false,
    restRotate: 0,
    fromX: -53,
    fromY: 45,
    fromRotate: -3,
    stackOrder: 3,
    enterDelay: 0.56,
  },
  {
    id: "guadalupe",
    src: "/imagenes/Comedor Guadalupe/CG.6.jpg",
    alt: "Comensales en el Comedor Guadalupe",
    isPriority: false,
    restRotate: 0,
    fromX: -53,
    fromY: -62,
    fromRotate: 9,
    stackOrder: 1,
    enterDelay: 0.68,
  },
];

const ALL_PHOTOS: HeroPhoto[] = [...LEFT_COLUMN, ...RIGHT_COLUMN];

interface PhotoStyle extends CSSProperties {
  "--from-x": string;
  "--from-y": string;
  "--from-rot": string;
  "--rest-rot": string;
  "--stack-z": number;
  "--enter-delay": string;
}

function photoStyle(photo: HeroPhoto): PhotoStyle {
  return {
    "--from-x": `${photo.fromX}%`,
    "--from-y": `${photo.fromY}%`,
    "--from-rot": `${photo.fromRotate}deg`,
    "--rest-rot": `${photo.restRotate}deg`,
    "--stack-z": photo.stackOrder,
    "--enter-delay": `${photo.enterDelay}s`,
  };
}

function PhotoTile({ photo, onReady }: { photo: HeroPhoto; onReady: (id: string) => void }) {
  return (
    <div
      className="hero-photo-expand relative aspect-square overflow-hidden rounded-2xl shadow-2xl"
      style={photoStyle(photo)}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={photo.isPriority}
        loading={photo.isPriority ? undefined : "eager"}
        sizes="(max-width: 1024px) 45vw, 28vw"
        className="object-cover"
        onLoad={() => onReady(photo.id)}
        onError={() => onReady(photo.id)}
      />
    </div>
  );
}

/** Starts the animation anyway if some photo never reports back. */
const READY_TIMEOUT_MS = 2000;

/** Four fixed photos that start piled up and fan out to their spots once all of them are loaded. */
export function HeroCollage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedIds = useRef<Set<string>>(new Set());
  const [isReady, setIsReady] = useState(false);

  const handleReady = useCallback((id: string): void => {
    loadedIds.current.add(id);
    if (loadedIds.current.size >= ALL_PHOTOS.length) setIsReady(true);
  }, []);

  useEffect(() => {
    // Images already loaded before hydration do not fire onLoad.
    const container = containerRef.current;
    if (container) {
      const images = Array.from(container.querySelectorAll<HTMLImageElement>("img"));
      ALL_PHOTOS.forEach((photo, index) => {
        const image = images[index];
        if (image?.complete && image.naturalWidth > 0) handleReady(photo.id);
      });
    }
    const timeoutId = window.setTimeout(() => setIsReady(true), READY_TIMEOUT_MS);
    return () => window.clearTimeout(timeoutId);
  }, [handleReady]);

  return (
    <div
      ref={containerRef}
      data-ready={isReady}
      className="hero-collage grid w-full grid-cols-2 gap-4 max-lg:mx-auto max-lg:max-w-md lg:gap-5"
    >
      <div className="flex flex-col gap-4 lg:gap-5">
        {LEFT_COLUMN.map((photo) => (
          <PhotoTile key={photo.id} photo={photo} onReady={handleReady} />
        ))}
      </div>
      <div className="flex flex-col gap-4 pt-10 lg:gap-5 lg:pt-14">
        {RIGHT_COLUMN.map((photo) => (
          <PhotoTile key={photo.id} photo={photo} onReady={handleReady} />
        ))}
      </div>
    </div>
  );
}
