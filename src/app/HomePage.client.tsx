"use client";

import { useEffect, useState } from "react";
import Homepost from "./assest/components/homepostcontent.tsx/Homepost";
import { fetchInitialData } from "@/lib/FetchIntialData";
import { Post } from "./types/Post";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const postsPerPage = 5;
  const maxPageNumbers = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);
  const startPage = Math.max(currentPage - Math.floor(maxPageNumbers / 2), 1);
  const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);
  const adjustedStart = Math.max(endPage - maxPageNumbers + 1, 1);

  useEffect(() => {
    const loadPosts = async () => {
      const { posts } = await fetchInitialData();
      setIsLoading(true);
      if (posts) {
        const sortedPosts = (posts as Post[]).sort((a, b) => {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        });

        const filtered = query
          ? sortedPosts.filter((post) =>
              post.title.toLowerCase().includes(query.toLowerCase())
            )
          : sortedPosts;

        setPosts(filtered);
        setCurrentPage(1);
        setIsLoading(false);
      }
    };

    loadPosts();
  }, [query]);

  return (
    <div className="p-4">
      <div className="grid gap-6">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post, i) => (
            <Homepost
              key={i}
              index={i}
              title={post.title}
              imageurl={post.featured_image}
              category={post.category}
              author={post.author}
              updated_at={post.updated_at}
              description={post.Description}
              linkurl={post.slug}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">
            {loading ? `Loading ...` : "No post Found.!"}
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center mt-8 space-x-2">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              ←
            </button>
          )}

          {Array.from(
            { length: Math.min(maxPageNumbers, totalPages) },
            (_, i) => {
              const pageNumber = adjustedStart + i;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-3 py-1 rounded ${
                    pageNumber === currentPage
                      ? "bg-[#302d55] text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            }
          )}

          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
