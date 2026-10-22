import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/resume.json", "/llms.txt"].map((p) => ({ url: `${siteUrl}${p}` }));
}
