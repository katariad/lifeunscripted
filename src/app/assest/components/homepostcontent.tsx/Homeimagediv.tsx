import React from "react";
import Image from "next/image";
import Link from "next/link";

type props = {
  alt: string;
  srcurl: string;
  linkurl: string;
  index: number;
};

export default function Homeimagediv({ alt, srcurl, linkurl, index }: props) {
  return (
    <div className="image-div mr-3 block overflow-hidden lg:float-left rounded-b-sm h-auto  ">
      <Link href={linkurl} className="homepost_featureImage relative  ">
        <Image
          src={srcurl}
          alt={alt}
          priority={index === 0 || index === 1}
          fetchPriority={index === 0 || index === 1 ? "high" : "low"}
          width={278}
          height={250}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="w-full lg:aspect-square lg:w-57"
        />
      </Link>
    </div>
  );
}
