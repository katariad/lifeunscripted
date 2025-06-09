// src/app/categories/page.tsx

import type { Metadata } from "next";
import Categoryclient from "./Categoryclinet";
export const dynamic = "force-dynamic";
// app/categories/page.tsx
export const metadata: Metadata = {
  title: "Browse All Categories | Life Unscripted",
  description:
    "Explore all blog categories on Life Unscripted, including health, skincare, DIY, and passive income tips.",
  alternates: {
    canonical: "https://www.lifeunscripted.site/categories",
  },
  openGraph: {
    type: "website",
    url: "https://www.lifeunscripted.site/categories",
    title: "Browse All Categories | Life Unscripted",
    description:
      "Discover blog categories on health, wellness, passive income, and more.",
    images: [
      {
        url: "https://www.lifeunscripted.site/ogimage.jpg", // replace with your actual image path
        width: 1200,
        height: 630,
        alt: "All Blog Categories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Categories | Life Unscripted",
    description:
      "Explore various blog categories like health, skincare, DIY, and monetization tips.",
    images: ["https://www.lifeunscripted.site/ogimage.jpg"], // replace with your actual image
  },
};

export default function CategoriesPage() {
  // Get unique categories

  return <Categoryclient />;
}
