"use client";

import { useEffect, useState } from "react";
import Singlepostlist from "./Singlepostlist";
import { usePosts } from "@/context/PostContext";

export default function RecentList() {
  const { posts } = usePosts(); // Get global post state
  const [recentPosts, setRecentPosts] = useState(posts);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const sortedRecent = posts
        .slice() // Create a shallow copy to avoid mutating global state
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .slice(0, 4);

      setRecentPosts(sortedRecent);
    }
  }, [posts]);

  if (!posts || posts.length === 0) {
    return <div className="text-gray-500 text-sm">Loading recent posts...</div>;
  }

  if (recentPosts.length === 0) {
    return <div className="text-gray-500 text-sm">No recent posts found.</div>;
  }

  return (
    <div>
      {recentPosts.map((post) => (
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
