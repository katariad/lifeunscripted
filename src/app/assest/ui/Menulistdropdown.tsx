import React, { ReactNode } from "react";
import Menulink from "./menuListlink";
type props = {
  linkurl: string;
  text: string;
  children: ReactNode;
};

export default function Menulistdropdown({ linkurl, text, children }: props) {
  return (
    <li className="relative  dropdown float-left ">
      <ul>
        <Menulink linkurl={linkurl} text={text} />
      </ul>

      <div className="absolute mt-5.5  ">
        <ul>{children}</ul>
      </div>
    </li>
  );
}
