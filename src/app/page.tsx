import HomePage from "./HomePage.client";
export const metadata = {
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
  icons: {
    icon: "https://www.lifeunscripted.site/favicon.ico",
    shortcut: "https://www.lifeunscripted.site/favicon.ico",
    apple: "https://www.lifeunscripted.site/apple-touch-icon.png",
  },
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
        url: `https://www.lifeunscripted.site/ogimage.jpg`,
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
    images: [`https://www.lifeunscripted.site/ogimage.jpg`],
  },
};
export default function Page() {
  return (
    <>
      {/* JSON-LD Structured Data */}

      {/* Client Side Blog List Component */}
      <HomePage />
    </>
  );
}
