import { SITE_URL } from "@/core/config/site";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", SITE_URL).toString(),
    },
    {
      url: new URL("/schedule", SITE_URL).toString(),
    },
    {
      url: new URL("/speakers", SITE_URL).toString(),
    },
  ];
}
