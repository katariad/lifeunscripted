// app/sitemap/page.tsx or pages/sitemap.tsx
import { fetchInitialData } from "@/lib/FetchIntialData";
import Link from "next/link";
import { Post } from "../types/Post";
// app/sitemap/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | Life Unscripted",
  description:
    "Explore the full sitemap of Life Unscripted, including all static pages, categories, and blog posts.",
  alternates: {
    canonical: "https://www.lifeunscripted.site/sitemap",
  },
  openGraph: {
    type: "website",
    url: "https://www.lifeunscripted.site/sitemap",
    title: "Sitemap | Life Unscripted",
    description:
      "Quickly access all sections of our site including blog categories, posts, and legal pages.",
    images: [
      {
        url: "https://www.lifeunscripted.site/ogimage.jpg",
        width: 1200,
        height: 630,
        alt: "Sitemap - Life Unscripted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Life Unscripted",
    description:
      "Navigate the Life Unscripted website with our complete sitemap listing.",
    images: ["https://www.lifeunscripted.site/ogimage.jpg"],
  },
};

const staticPages = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms and Condition", href: "/terms-and-conditions" },
  { title: "Disclaimer", href: "/disclaimer" },
];

const SitemapPage = async () => {
  const { posts } = await fetchInitialData();

  // Group posts by category
  const categoriesMap: Record<string, typeof posts> = {};
  (posts as Post[]).forEach((post) => {
    if (!categoriesMap[post.category]) {
      categoriesMap[post.category] = [];
    }
    categoriesMap[post.category].push(post);
  });

  return (
    <div className="postcontent">
      <h1 className="border-b pb-2">Sitemap</h1>

      {/* Static Pages */}
      <section className="mb-10">
        <h2 className="">Static Pages</h2>
        <ul className="">
          {staticPages.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories and Posts */}
      <section>
        <h2 className="border-b">Categories & Posts</h2>
        <div className="overflow-y-auto max-h-[340px] ">
          {Object.keys(categoriesMap).map((category) => (
            <div key={category} className="mb-2 ">
              <h3 className="text-xl font-semibold text-gray-600 mb-3">
                {category}
              </h3>
              <ul className="">
                {(categoriesMap[category] as Post[]).map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/posts/${post.slug}`}
                      className="text-blue-500 hover:underline hover:text-blue-700 transition"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
