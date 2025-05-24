import Link from "next/link";
import React from "react";

type props = {
  linkurl: string;
  text: string;
};

export default function menuListlink({ linkurl, text }: props) {
  return (
    <li className="float-left ml-2 " key={linkurl}>
      <Link href={linkurl} className="menu_nav_link  ">
        {text}
      </Link>
    </li>
  );
}
