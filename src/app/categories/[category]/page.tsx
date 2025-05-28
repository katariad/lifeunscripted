import { fetchInitialData } from "../../../lib/FetchIntialData";
import { notFound } from "next/navigation";
import Datefunction from "@/app/assest/utils/Datefunction";
import { Post } from "@/app/types/Post";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const { posts } = await fetchInitialData();
  const post = (posts as Post[]).find((p) => p.category === category);

  if (!post) return {};

  const title = `${post.category} | Life Unscripted`;
  const description = `Explore blogs on ${post.category}  insights with Life Unscripted.`;
  const url = `https://www.lifeunscripted.site/${post.category}`;
  const image = "https://www.lifeunscripted.site/ogimage.jpg";

  return {
    title,
    description,
    robots: "index, follow",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: "Life Unscripted",
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@lifeunscripted",
      images: image ? [image] : [],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  console.log(category.replaceAll("-", " ").toLowerCase());

  const { posts } = await fetchInitialData();

  if (!posts || posts.length === 0) {
    notFound(); // Show 404 if no posts at all
  }

  const filteredPosts = (posts as Post[]).filter(
    (post) =>
      post.category.replaceAll("-", " ").toLowerCase() ===
      category.replaceAll("-", " ").toLowerCase()
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
            <Link href={`/${post.slug}`} className="readmore_button">
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
