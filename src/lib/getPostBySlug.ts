// lib/getPostBySlug.ts
import { supabase } from "@/lib/supabase"; // adjust to your setup
import { Post } from "@/app/types/Post";

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.error("Post fetch error:", error);
    return null;
  }

  return data;
}
