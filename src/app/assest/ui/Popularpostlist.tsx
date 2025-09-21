"use client";
import { useEffect, useState } from "react";
import Singlepostlist from "./Singlepostlist";
import { usePosts } from "@/context/PostContext";

export default function PopularPostList() {
  const { posts } = usePosts();
  const [popularPosts, setPopularPosts] = useState(posts);

  useEffect(() => {
    const loadPosts = async () => {
      if (posts && posts.length > 0) {
        const filtered = posts
          .filter((post) => post.is_popular)
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .slice(0, 3);

        setPopularPosts(filtered);
      }
    };
    loadPosts();
  }, [posts]);

  if (!posts || posts.length === 0) {
    return (
      <div className="text-sm text-gray-500">Loading Popular posts...</div>
    );
  }

  if (popularPosts.length === 0) {
    return <div className="text-sm text-gray-500">No popular posts found.</div>;
  }

  return (
    <div>
      {popularPosts.map((post) => (
        <Singlepostlist
          key={post.id}
          feautureimage={post.featured_image}
          linkurl={post.slug}
          title={post.title}
          dated={post.created_at}
        />
      ))}
    </div>
  );
}
