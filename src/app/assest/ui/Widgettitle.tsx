import React from "react";

type props = {
  title: string;
};

export default function Widgettitle({ title }: props) {
  return <h3 className="preview-heading">{title}</h3>;
}
