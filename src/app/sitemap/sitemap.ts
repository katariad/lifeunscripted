import { type MetadataRoute } from "next";
import { fetchInitialData } from "@/lib/FetchIntialData";
import { Post } from "../types/Post";

export default async function GET(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.lifeunscripted.site"; // Replace with your actual domain

  // ✅ Await the result first
  const data = await fetchInitialData();
  const posts = data.posts;

  const staticPaths = [
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
    "/terms-and-conditions",
  ];
  const staticRoutes = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const dynamicRoutes = (posts as Post[]).map((post) => ({
    url: `${baseUrl}/${post.slug}`, // Adjust path as needed
    lastModified: new Date(post.updated_at || post.created_at).toISOString(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
