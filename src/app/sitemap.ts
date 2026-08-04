import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { products } from "@/lib/products";

const BASE_URL = "https://cobapeatlanka.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/about",
    "/products",
    "/products/other-products",
    "/quality",
    "/export",
    "/gallery",
    "/faq",
    "/contact",
  ];

  const productPages = products.map((p) => `/products/${p.slug}`);

  return [...staticPages, ...productPages].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly" as const,
    lastModified: new Date(),
  }));
}
