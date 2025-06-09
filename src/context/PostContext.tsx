// context/PostContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Post = {
  id: string;
  title: string;
  featured_image: string;
  category: string;
  author: string;
  updated_at: string;
  Description: string;
  slug: string;
  created_at: string;
  is_popular: string;
  content: string;
  keywords: string;
  faqSchema: string;
};
// Add other fields based on your DB

type PostContextType = {
  posts: Post[];
  loading: boolean;
};

const PostContext = createContext<PostContextType>({
  posts: [],
  loading: true,
});

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts?select=*`,
          {
            headers: {
              apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
              Authorization: `Bearer ${process.env
                .NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
            },
          }
        );
        if (!response.ok) throw new Error(`Status: ${response.status}`);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
