// app/[post]/page.tsx
import { fetchInitialData } from "@/lib/FetchIntialData";
import Link from "next/link";
import "./post.css";
import { notFound } from "next/navigation";
import Datefunction from "@/app/assest/utils/Datefunction";
import Image from "next/image";
import PostContent from "@/app/[slug]/Postcontent";
import { Post } from "@/app/types/Post";
import Script from "next/script";
import slugify from "../assest/utils/Slugmaker";
export const dynamic = "force-dynamic";
// ✅ Generate metadata for SEO using App Router

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { posts } = await fetchInitialData();
  const post = (posts as Post[]).find((p) => p.slug === slug);

  if (!post) return {};

  const title = `${post.title} | Life Unscripted`;
  const description =
    post.Description || "Explore blog insights with Life Unscripted.";
  const url = `https://www.lifeunscripted.site/${post.slug}`;
  const image = post.featured_image;

  return {
    title,
    description,
    keywords: post.keywords
      ? post.keywords.split(",").map((kw) => kw.replace(/["']/g, "").trim())
      : [],
    robots: "index, follow",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
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

// ✅ Main blog post page component
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { posts } = await fetchInitialData();
  const post = (posts as Post[]).find((p) => p.slug === slug);
  const faqSchema = post?.faqSchema;
  if (!post) {
    notFound();
  }

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.Description,
          image: post.featured_image,
          author: {
            "@type": "Person",
            name: "Life Unscripted",
          },
          publisher: {
            "@type": "Organization",
            name: "Life Unscripted",
            logo: {
              "@type": "ImageObject",
              url: "/logo.webp",
            },
          },
          url: `https://www.lifeunscripted.site/${post.slug}`,
          datePublished: post.updated_at,
          dateModified: post.updated_at,
        })}
      </Script>

      {/* Breadcrumb JSON-LD Structured Data */}
      <Script id="breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.lifeunscripted.site/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "category",
              item: `https://www.lifeunscripted.site/${post.category}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Post Title", // Replace with dynamic title
              item: `https://www.lifeunscripted.site/blog/${post.slug}`,
            },
          ],
        })}
      </Script>

      {faqSchema && (
        <Script id="faq-schema" type="application/ld+json">
          {typeof faqSchema === "string"
            ? faqSchema
            : JSON.stringify(faqSchema)}
        </Script>
      )}

      <div className="container mx-auto p-4 pt-0 postcontent">
        <div className="mb-4 border-b-2 border-dotted border-gray-300/90">
          <p className="flex gap-1 text-xs! capitalize mt-0">
            <Link href="/">Home</Link> <span> {">"} </span>
            <Link href={`/categories/${post.category}`}>
              {slugify(post.category)}
            </Link>
            <span> {">"} </span>
            {post.title}
          </p>
          <p className="text-xs! flex mt-2">
            <b>BY: </b>
            <b>
              <Link href="/">&nbsp;Life Unscripted - &nbsp;</Link>
            </b>
            <span className="text-xs!">
              <Datefunction date={post.updated_at} />
            </span>
          </p>
        </div>

        <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>

        {post.featured_image && (
          <Image
            width={700}
            height={100}
            src={post.featured_image}
            alt={post.title}
            className="aspect-3/1"
            priority={true}
            unoptimized
            loading="eager"
          />
        )}

        <p>
          <small>Image:&nbsp;{post.title}&nbsp;(Source: Life Unscripted)</small>
        </p>

        <p className="mb-4">{post.Description}</p>

        <PostContent html={post.content} />
      </div>
    </>
  );
}
