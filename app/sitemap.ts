import { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${siteConfig.domain}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
