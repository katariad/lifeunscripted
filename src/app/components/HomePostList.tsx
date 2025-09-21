import { Suspense } from "react";
import Homepost from "../assest/components/homepostcontent.tsx/Homepost";
import SearchFilter from "./SearchFilter";
import { Post } from "../types/Post";
import Paginationcomp from "./Paginationcomp";

interface HomePostListProps {
  initialPosts: Post[];
  searchParams?: { q?: string; page?: string };
}

export default function HomePostList({
  initialPosts,
  searchParams = {},
}: HomePostListProps) {
  const query = searchParams.q || "";
  const currentPage = parseInt(searchParams.page || "1", 10);
  const postsPerPage = 5;

  // Server-side filtering and sorting
  const sortedPosts = [...initialPosts].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  const filteredPosts = query
    ? sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    : sortedPosts;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const showEmpty = filteredPosts.length === 0;

  return (
    <div className="p-4">
      {/* Search Component (Client-side for interactivity) */}
      <Suspense
        fallback={
          <div className="mb-6 h-10 bg-gray-200 animate-pulse rounded"></div>
        }
      >
        <SearchFilter initialQuery={query} />
      </Suspense>

      {/* Posts Content (Server-rendered, immediately visible to crawlers) */}
      <div className="grid gap-6">
        {showEmpty ? (
          <p className="text-center text-gray-500">
            {query ? `No posts found for "${query}"` : "No posts available"}
          </p>
        ) : (
          paginatedPosts.map((post, i) => (
            <Homepost
              key={post.slug}
              index={startIndex + i}
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

      {/* Pagination (Client-side for interactivity) */}
      {totalPages > 1 && (
        <Suspense
          fallback={
            <div className="mt-8 h-10 bg-gray-200 animate-pulse rounded"></div>
          }
        >
          <Paginationcomp
            currentPage={currentPage}
            totalPages={totalPages}
            maxPageNumbers={3}
          />
        </Suspense>
      )}
    </div>
  );
}
