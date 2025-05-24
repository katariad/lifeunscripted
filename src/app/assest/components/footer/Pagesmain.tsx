import React from "react";
import Widgettitle from "../../ui/Widgettitle";
import Pageslist from "../../ui/Pageslist";

export default function Pagesmain() {
  return (
    <div className="widget mt-8">
      <Widgettitle title="Pages" />
      <Pageslist />
    </div>
  );
}
