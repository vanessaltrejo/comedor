import Image from "next/image";
import { revealDelay } from "@/lib/scrollRevealStyle";

interface VideoItem {
  title: string;
  href: string;
  imageSrc: string;
  revealDelayMs: number;
}

const VIDEOS: VideoItem[] = [
  {
    title: "Video Institucional",
    href: "https://www.youtube.com/watch?v=bkDXa2lRu9s",
    imageSrc: "/imagenes/video-institucional.webp",
    revealDelayMs: 0,
  },
  {
    title: "Nuestra Directora",
    href: "https://www.youtube.com/watch?v=GY7a6vkFO3s",
    imageSrc: "/imagenes/nuestra-directora.webp",
    revealDelayMs: 150,
  },
  {
    title: "Comedor Unidad Escobedo",
    href: "https://www.youtube.com/watch?v=hJ_-4FF7Xr0",
    imageSrc: "/imagenes/comedor-unidad-escobedo.webp",
    revealDelayMs: 300,
  },
];

export function VideoCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {VIDEOS.map((video) => (
        <a
          key={video.href}
          href={video.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-xl cursor-pointer card-hover scroll-reveal"
          style={revealDelay(video.revealDelayMs)}
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={video.imageSrc}
              alt={video.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                <i className="fas fa-play ml-1 text-xl" aria-hidden="true" />
              </div>
            </div>
          </div>
          <p className="px-4 py-4 text-center text-sm font-bold tracking-wide text-brand">
            {video.title}
          </p>
        </a>
      ))}
    </div>
  );
}
