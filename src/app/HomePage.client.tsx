import { useEffect, useMemo, useState } from "react";
import Homepost from "./assest/components/homepostcontent.tsx/Homepost";
import { useSearchParams } from "next/navigation";
import { usePosts } from "@/context/PostContext";
import { Post } from "./types/Post";

export default function HomePage() {
  const { posts } = usePosts();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const postsPerPage = 5;
  const maxPageNumbers = 3;

  const sortedPosts = useMemo(() => {
    if (!Array.isArray(posts) || posts.length === 0) return [];
    return [...posts].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [posts]);

  const [postdata, setPostdata] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!sortedPosts || sortedPosts.length === 0) return;

    if (query) {
      const filtered = sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setPostdata(filtered);
    } else {
      setPostdata(sortedPosts);
    }
    setCurrentPage(1);
  }, [query, sortedPosts]);

  const totalPages = Math.ceil(postdata.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = postdata.slice(startIndex, startIndex + postsPerPage);

  const startPage = Math.max(currentPage - Math.floor(maxPageNumbers / 2), 1);
  const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);
  const adjustedStart = Math.max(endPage - maxPageNumbers + 1, 1);

  const isLoading = !Array.isArray(posts) || posts.length === 0;
  const showEmpty = !isLoading && postdata.length === 0;

  return (
    <div className="p-4">
      <div className="grid gap-6">
        {isLoading ? (
          <p className="text-center text-gray-400">Loading posts...</p>
        ) : showEmpty ? (
          <p className="text-center text-gray-500">No post Found.!</p>
        ) : (
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
                  onClick={() => {
                    setCurrentPage(pageNumber);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
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
