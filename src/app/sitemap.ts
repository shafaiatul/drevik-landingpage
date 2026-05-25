import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://drevik.app",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://drevik.app/privacy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://drevik.app/terms",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
