import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type props = {
  count: number;
  name: string;
  url: Url;
};

export default function PopularCategoriessingle({ count, name, url }: props) {
  return (
    <li>
      <Link className="label-name" href={url}>
        {name}
        <span className="label-count">{count}</span>
      </Link>
    </li>
  );
}
