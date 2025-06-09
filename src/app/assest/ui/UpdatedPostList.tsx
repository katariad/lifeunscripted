"use client";

import { useEffect, useState } from "react";
import Singlepostlist from "./Singlepostlist";
import { usePosts } from "@/context/PostContext";

export default function UpdatedPostList() {
  const { posts } = usePosts();
  const [updatedPosts, setUpdatedPosts] = useState(posts);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const filtered = posts
        .slice() // Make a shallow copy
        .sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        .slice(0, 4);

      setUpdatedPosts(filtered);
    }
  }, [posts]);

  if (!posts || posts.length === 0) {
    return (
      <div className="text-sm text-gray-500">Loading updated posts...</div>
    );
  }

  if (updatedPosts.length === 0) {
    return <div className="text-sm text-gray-500">No updated posts found.</div>;
  }

  return (
    <div>
      {updatedPosts.map((post) => (
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
