"use client";

import { useEffect, useState } from "react";
import Singlepostlist from "./Singlepostlist";
import { fetchInitialData } from "@/lib/FetchIntialData";
import { Post } from "@/app/types/Post";

export default function UpdatedPostList() {
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const { posts } = await fetchInitialData();

      if (posts) {
        const filtered = (posts as Post[])
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          )
          .slice(0, 4);

        setPopularPosts(filtered);
      }
    };

    loadPosts();
  }, []);

  if (popularPosts.length === 0) return <div>No popular posts found.</div>;

  return (
    <div>
      {popularPosts.map((post) => (
        <Singlepostlist
          key={post.id}
          feautureimage={post.featured_image}
          linkurl={post.slug}
          title={post.title}
          dated={post.updated_at}
        />
      ))}
    </div>
  );
}
