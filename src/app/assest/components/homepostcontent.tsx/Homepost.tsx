import React from "react";
import Homeimagediv from "./Homeimagediv";
import Homepostcontent from "./Homepostcontent";
import Head from "next/head";

type props = {
  category: string;
  title: string;
  author: string;
  updated_at: string;
  description: string;
  linkurl: string;
  imageurl: string;
  index: number;
};

export default function Homepost({
  category,
  title,
  author,
  updated_at,
  description,
  linkurl,
  imageurl,
  index,
}: props) {
  return (
    <>
      {/* Preload the first image only */}
      {index === 0 && (
        <Head>
          <link rel="preload" as="image" href={imageurl} fetchPriority="high" />
        </Head>
      )}

      <main className="block relative overflow-hidden p-0 m-0 mb-7 box-border">
        <Homeimagediv
          srcurl={imageurl}
          alt={title}
          linkurl={linkurl}
          index={index}
        />

        <Homepostcontent
          category={category}
          title={title}
          author={author}
          updated_at={updated_at}
          description={description}
          linkurl={linkurl}
        />
      </main>
    </>
  );
}
