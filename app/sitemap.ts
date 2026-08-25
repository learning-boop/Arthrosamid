import type { MetadataRoute } from "next";
import { siteUrl } from "./site-config";

const contentRoutes = [
  "",
  "/arthrosamid",
  "/joint-care-clinics",
  "/knee-arthritis",
  "/working-lives",
  "/our-clinics",
];

const legalRoutes = [
  "/privacy-policy",
  "/cookie-policy",
  "/terms-and-conditions",
  "/medical-disclaimer",
];

const lastModified = new Date("2026-08-25");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...contentRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...legalRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
