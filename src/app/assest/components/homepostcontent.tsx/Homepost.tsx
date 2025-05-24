import React from "react";
import Homeimagediv from "./Homeimagediv";
import Homepostcontent from "./Homepostcontent";

type props = {
  category: string;
  title: string;
  author: string;
  updated_at: string;
  description: string;
  linkurl: string;
  imageurl: string;
};

export default function Homepost({
  category,
  title,
  author,
  updated_at,
  description,
  linkurl,
  imageurl,
}: props) {
  return (
    <main className="block   relative overflow-hidden p-0 m-0 mb-7 box-border">
      <Homeimagediv srcurl={imageurl} alt={title} linkurl={linkurl} />
      <Homepostcontent
        category={category}
        title={title}
        author={author}
        updated_at={updated_at}
        description={description}
        linkurl={linkurl}
      />
    </main>
  );
}
