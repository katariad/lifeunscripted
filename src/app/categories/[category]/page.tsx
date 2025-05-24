import { fetchInitialData } from "../../../lib/FetchIntialData";
import { notFound } from "next/navigation";
import Datefunction from "@/app/assest/utils/Datefunction";
import Link from "next/link";
import slugify from "@/app/assest/utils/Slugmaker";
import { Post } from "@/app/types/Post";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = slug;

  const { posts } = await fetchInitialData();

  if (!posts || posts.length === 0) {
    notFound(); // Show 404 if no posts at all
  }

  const filteredPosts = (posts as Post[]).filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredPosts.length === 0) {
    notFound(); // Show 404 if no posts in this category
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Category: {category}</h1>
      <ul className="space-y-4">
        {filteredPosts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold capitalize ">{post.title}</h2>
            <span className="text-sm">
              <b>By: LifeUnscripted </b>
              {<Datefunction date={post.updated_at} />}
            </span>
            <p className="text-gray-600">{post.Description}</p>
            <Link
              rel="stylesheet"
              href={`/${slugify(post.title)}`}
              className="readmore_button"
            >
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
