"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationClientProps {
  currentPage: number;
  totalPages: number;
  maxPageNumbers: number;
}

export default function PaginationClient({
  currentPage,
  totalPages,
  maxPageNumbers,
}: PaginationClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startPage = Math.max(currentPage - Math.floor(maxPageNumbers / 2), 1);
  const endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);
  const adjustedStart = Math.max(endPage - maxPageNumbers + 1, 1);

  return (
    <div className="flex items-center justify-center mt-8 space-x-2">
      {currentPage > 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          aria-label="Previous page"
        >
          ←
        </button>
      )}

      {Array.from({ length: Math.min(maxPageNumbers, totalPages) }, (_, i) => {
        const pageNumber = adjustedStart + i;
        return (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-3 py-1 rounded transition-colors ${
              pageNumber === currentPage
                ? "bg-[#302d55] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label={`Go to page ${pageNumber}`}
            aria-current={pageNumber === currentPage ? "page" : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      {currentPage < totalPages && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          aria-label="Next page"
        >
          →
        </button>
      )}
    </div>
  );
}
