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
  // Check if this is likely the LCP element (first few images)
  const isLCP = index === 0 || index === 1;

  return (
    <div className="image-div mr-3 block overflow-hidden lg:float-left rounded-b-sm h-auto">
      <Link href={linkurl} className="homepost_featureImage relative">
        <Image
          src={srcurl}
          alt={alt}
          priority={isLCP}
          loading={isLCP ? "eager" : "lazy"} // Explicit loading strategy
          fetchPriority={isLCP ? "high" : "low"}
          width={278}
          height={250}
          sizes="(max-width: 768px) 278px, (max-width: 1024px) 300px, 278px" // Add responsive sizes
          quality={85} // Optimize quality vs file size
          placeholder="blur" // Add blur placeholder
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=" // Low quality placeholder
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
