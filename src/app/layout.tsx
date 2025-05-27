import "./globals.css";
import Header from "./assest/components/header/header";
import Footer from "./assest/components/footer/footer";
import Sidebar from "./assest/components/sidebar/Sidebar";
import { fetchInitialData } from "../lib/FetchIntialData";
import { InitialDataProvider } from "../lib/InitialDataContext";
import FeaturePost from "./assest/components/FeaturePost";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialData = await fetchInitialData();

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Head Script */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KXVJ84PK');
          `}
        </Script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          rel="stylesheet"
        />

        <title>Life unscripted</title>
      </head>
      <body>
        {/* GTM NoScript (for non-JS browsers) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KXVJ84PK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <InitialDataProvider data={initialData}>
          <Header />

          <section className="flex justify-center align-middle  ">
            <div
              className="container relative border-box w-full p-2 md:flex gap-x-5 max-w-[1070] "
              id="main-container"
            >
              <main className=" w-full  md:w-4/5 md:min-h-[1025px] content ">
                {children}

                <FeaturePost />
              </main>
              <div
                className=" w-full relative md:w-3/10 box-border "
                id="content-container"
              >
                <Sidebar />
              </div>
            </div>
          </section>

          <Footer />
        </InitialDataProvider>
      </body>
      <GoogleAnalytics gaId="G-ZZP1T8RE3K" />
    </html>
  );
}
