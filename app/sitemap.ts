import type { MetadataRoute } from "next";
import { resolveSiteUrl } from "@/lib/siteUrl";

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/nosotros", priority: 0.8 },
  { path: "/comedores", priority: 0.8 },
  { path: "/donar", priority: 0.9 },
  { path: "/informe", priority: 0.6 },
  { path: "/contactanos", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = resolveSiteUrl();

  return ROUTES.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
