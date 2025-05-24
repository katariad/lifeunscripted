// lib/fetchCategoriesWithPosts.ts
import { fetchInitialData } from "./FetchIntialData";
import { Post } from "@/app/types/Post";

export interface Category {
  name: string;
  slug: string;
  posts: Post[];
}

export async function fetchCategoriesWithPosts(): Promise<Category[]> {
  const { posts } = await fetchInitialData();

  const categoryMap: Record<string, Post[]> = {};
  (posts as Post[]).forEach((post) => {
    const cat = post.category || "Uncategorized";
    if (!categoryMap[cat]) categoryMap[cat] = [];
    categoryMap[cat].push(post);
  });

  return Object.entries(categoryMap).map(([name, posts]) => ({
    name,
    slug: `/categories/${name.toLowerCase().replace(/\s+/g, "-")}`,
    posts,
  }));
}
