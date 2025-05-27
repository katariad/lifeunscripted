import "./globals.css";
import Header from "./assest/components/header/header";
import Footer from "./assest/components/footer/footer";
import Sidebar from "./assest/components/sidebar/Sidebar";
import { fetchInitialData } from "../lib/FetchIntialData";
import { InitialDataProvider } from "../lib/InitialDataContext";
import FeaturePost from "./assest/components/FeaturePost";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialData = await fetchInitialData();

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          rel="stylesheet"
        />
        <GoogleTagManager gtmId="GTM-KXVJ84PK" />
      </head>

      <body>
        <InitialDataProvider data={initialData}>
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
