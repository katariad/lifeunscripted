import { notFound } from "next/navigation";
import { fetchInitialData } from "../../lib/FetchIntialData";
import { getPostBySlug } from "../../lib/getPostBySlug";
import ArticleSchema from "../components/ArticleSchema";
import "./post.css";

interface PageProps {
  params: Promise<{ slug: string }>; // Promise type
} // Generate static pages for all posts
export async function generateStaticParams() {
  const { posts } = await fetchInitialData();

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params; // Await the params
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.Description,
    canonical: `https://lifeunscripted.site/${post.slug}`,
    openGraph: {
      title: post.title,
      description: post.Description,
      url: `https://lifeunscripted.site/${post.slug}`,
      type: "article",
      publishedTime: post.created_at,
      images: post.featured_image ? [post.featured_image] : [],
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params; // Await the params
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <ArticleSchema post={post} />
      <header>
        <h1>{post.title}</h1>
        {/* <Image
          src={post.featured_image}
          alt={post.title}
          width={1200}
          height={300}
        /> */}
        <time dateTime={post.created_at}>
          {new Date(post.created_at).toLocaleDateString()}
        </time>
      </header>
      <div
        className="postcontent"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
