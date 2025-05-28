"use client";
import React from "react";
import Link from "next/link";
import { useInitialData } from "../../lib/InitialDataContext";
import slugify from "../assest/utils/Slugmaker";
import { Post } from "@/app/types/Post";
export default function Categoryclient() {
  const { posts } = useInitialData();
  const uniqueCategories = Array.from(
    new Set((posts as Post[])?.map((post) => post.category))
  );
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {uniqueCategories?.map((category, i) => (
          <Link
            key={i}
            href={`categories/${slugify(category)}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200"
          >
            <h2 className="text-xl font-semibold capitalize text-blue-700">
              {category}
            </h2>
            <p className="text-gray-600 mt-2">Click for more...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
