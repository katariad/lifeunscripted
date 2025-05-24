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
          alt={post.title}
          src={post.featured_image}
          width={700}
          height={200}
          className="aspect-7/2 mb-2"
        />
        <h3 className="bold capitalize  pl-2 ">{post.title}</h3>
      </Link>
      <p className="text-xs pl-2 ">{<Datefunction date={post.created_at} />}</p>
    </div>
  );
}
