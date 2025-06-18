export const dynamic = "force-static";
import "./globals.css";
import Header from "./assest/components/header/header";
import Footer from "./assest/components/footer/footer";
import Sidebar from "./assest/components/sidebar/Sidebar";
import { fetchInitialData } from "../lib/FetchIntialData";
import { InitialDataProvider } from "../lib/InitialDataContext";
import FeaturePost from "./assest/components/FeaturePost";
// import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { PostProvider } from "@/context/PostContext";
import "@/app/assest/css/fontawesome.min.css";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialData = await fetchInitialData();

  return (
    <html lang="en">
      <body>
        {/* <GoogleTagManager gtmId="GTM-KXVJ84PK" />
        <GoogleAnalytics gaId="G-ZZP1T8RE3K" /> */}
        <InitialDataProvider data={initialData}>
          <PostProvider>
            <Header />
            <section className="flex justify-center align-middle  ">
              <div
                className="container relative border-box w-full p-2 md:flex gap-x-5 max-w-[1070px] "
                id="main-container"
              >
                <main className=" w-full  md:w-4/5 md:min-h-[1025px] content ">
                  {children}

                  <FeaturePost />
                </main>
                <div
                  className=" w-full relative md:w-[30%] box-border "
                  id="content-container"
                >
                  <Sidebar />
                </div>
              </div>
            </section>

            <Footer />
          </PostProvider>
        </InitialDataProvider>
      </body>
    </html>
  );
}
