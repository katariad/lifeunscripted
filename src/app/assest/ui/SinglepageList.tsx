import Link from "next/link";

import React from "react";

type props = {
  text: string;
  url: string;
};

export default function SinglepageList({ text, url }: props) {
  return (
    <li>
      <Link href={url} className="label-name">
        {text}
      </Link>
    </li>
  );
}
