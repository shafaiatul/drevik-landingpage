import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Drevik — Personalized Fitness Coaching",
    short_name: "Drevik",
    description:
      "Personalized fitness coaching for smarter training, safer progression, and better recovery.",
    start_url: "/",
    display: "standalone",
    background_color: "#eef2ec",
    theme_color: "#223436",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
