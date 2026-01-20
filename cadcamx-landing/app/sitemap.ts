import { MetadataRoute } from "next";
import { getAllSEOPageSlugs } from "@/lib/seo-pages-data";
import { getAllGlossaryTermSlugs } from "@/lib/glossary-data";
import { getAllBlogPostSlugs } from "@/lib/blog-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cadcamx.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/services/2d-drafting",
    "/services/3d-modeling",
    "/services/cam-programming",
    "/services/reverse-engineering",
    "/services/simulation",
    "/pricing",
    "/contact",
    "/case-studies",
    "/solutions",
    "/blog",
    "/glossary",
    "/careers",
    "/help-center",
    "/documentation",
    "/privacy-policy",
    "/terms-of-service",
    "/security",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // SEO Solution pages
  const seoPages = getAllSEOPageSlugs().map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Glossary pages
  let glossaryPages: MetadataRoute.Sitemap = [];
  try {
    glossaryPages = getAllGlossaryTermSlugs().map((slug) => ({
      url: `${baseUrl}/glossary/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));
  } catch {
    // Glossary not yet created
  }

  // Blog pages
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    blogPages = getAllBlogPostSlugs().map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch {
    // Blog not yet created
  }

  return [...staticPages, ...seoPages, ...glossaryPages, ...blogPages];
}
