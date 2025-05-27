import HomePage from "./HomePage.client";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LifeUnscripted - Blogging Tips & Natural Living",
  description:
    "Lifeunscripted offers blogging tutorials, SEO tips, and natural skincare remedies to help you live better and earn online.",
  keywords: [
    "Life unscripted",
    "Life Unscripted blog",
    "blogging tips",
    "life tips and guides",
    "Skin care with DIY pack",
    "Earn online money with us",
    "Smart Seo tips and Guide",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.lifeunscripted.site/",
  },
  openGraph: {
    title: "Lifeunscripted - Blogging Tips & Natural Living",
    description:
      "Lifeunscripted offers blogging tutorials, SEO tips, and natural skincare remedies to help you live better and earn online.",
    url: "https://www.lifeunscripted.site/",
    siteName: "Life Unscripted",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://www.lifeunscripted.site/logo.webp`,
        width: 1200,
        height: 630,
        alt: "Lifeunscripted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifeunscripted - Blogging Tips & Natural Living",
    description:
      "Blog smarter and live better with expert SEO, blogging, and natural wellness content.",
    creator: "@lifeunscripted",
    images: [`https://www.lifeunscripted.site/logo.webp`],
  },
};

export default function Page() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script id="ld-json-home" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Lifeunscripted",
          url: "https://www.lifeunscripted.site/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.lifeunscripted.site/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          publisher: {
            "@type": "Organization",
            name: "Lifeunscripted",
            logo: {
              "@type": "ImageObject",
              url: "https://www.lifeunscripted.site/logo.webp",
            },
          },
        })}
      </Script>
      {/* Client Side Blog List Component */}
      <HomePage />
    </>
  );
}
