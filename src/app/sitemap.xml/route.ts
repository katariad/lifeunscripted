// app/sitemap.xml/route.ts

import { fetchInitialData } from "@/lib/FetchIntialData";
import { Post } from "@/app/types/Post";

export async function GET() {
  const baseUrl = "https://www.lifeunscripted.site";
  const data = await fetchInitialData();
  const posts = data?.posts || [];

  const staticPaths = [
    "/",
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
    "/terms-and-conditions",
  ];

  const staticRoutes = staticPaths
    .map((path) => {
      return `<url><loc>${baseUrl}${path}</loc><lastmod>${new Date().toISOString()}</lastmod></url>`;
    })
    .join("");

  const dynamicRoutes = (posts as Post[])
    .filter((post) => post?.slug)
    .map((post) => {
      const date = new Date(
        post.updated_at || post.created_at || Date.now()
      ).toISOString();
      return `<url><loc>${baseUrl}/${post.slug}</loc><lastmod>${date}</lastmod></url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes}
  ${dynamicRoutes}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
