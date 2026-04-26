import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const staticPages = ["", "/about", "/products", "/services", "/contact"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date()
  }));

  const productPages = products.map((product) => ({
    url: `${siteConfig.url}/products/${product.id}`,
    lastModified: new Date()
  }));

  return [...staticPages, ...productPages];
}
