import { fetchInitialData } from "@/lib/FetchIntialData";
import Datefunction from "@/app/assest/utils/Datefunction";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturePost() {
  const { posts } = await fetchInitialData();
  const post = posts[posts.length - 2];
  return (
    <div className="p-3">
      <Link href={post.slug}>
        <Image
          alt={"Faeture post image"}
          width={677}
          height={230}
          priority
          style={{ aspectRatio: "3 / 1" }}
          fetchPriority="high"
          loading="eager"
          // ✅ Preload for LCP
          src={post.featured_image}
          className="object cover mb-2 featured_img  "
        />
        <h3 className="bold capitalize  pl-2 ">{post.title}</h3>
      </Link>
      <p className="text-xs pl-2 ">{<Datefunction date={post.created_at} />}</p>
    </div>
  );
}
