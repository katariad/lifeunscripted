import React from "react";
import Widgettitle from "../../ui/Widgettitle";
import FooterCategoryList from "../../ui/FooterCategoryList";

export default function Footercategory() {
  return (
    <div className="mb-4">
      <Widgettitle title="Others Categories" />
      <div className="widget-content list-label">
        <ul>
          <FooterCategoryList />
        </ul>
      </div>
    </div>
  );
}
