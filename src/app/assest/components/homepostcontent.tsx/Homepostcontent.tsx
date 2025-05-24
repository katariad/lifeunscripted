import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import Datefunction from "@/app/assest/utils/Datefunction";
import slugify from "../../utils/Slugmaker";

type props = {
  category: string;
  title: string;
  author: string;
  updated_at: string;
  description: string;
  linkurl: Url;
};

export default function Homepostcontent({
  category,
  title,
  author,
  updated_at,
  description,
  linkurl,
}: props) {
  return (
    <div className="p-2px relative break-words block overflow-hidden   ">
      <Link
        href={`/categories/${slugify(category)}`}
        className="capitalize underline mb-2 w-fit "
      >
        # {category}
      </Link>
      <div>
        <h2 className="homepost_title mb-0.5!important capitalize ">
          <Link href={linkurl}>{title}</Link>
        </h2>

        <div className="inline-block  mb-2 text-sm">
          <strong className="float-left">BY:&nbsp;</strong>
          <Link className="float-left" href={"/"}>
            <strong>{author || `Life unscripted`}</strong>
          </Link>
          <span>- {<Datefunction date={updated_at} />}</span>
        </div>
      </div>
      <div className="mb-2">
        <p className="text-sm">
          {/* 33words or 185 charcter last */}
          {description}
        </p>
      </div>

      <Link rel="stylesheet" href={`/${linkurl}`} className="readmore_button">
        Read more
      </Link>
    </div>
  );
}
