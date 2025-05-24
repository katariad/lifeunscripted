import React from "react";
import Widgettitle from "../../ui/Widgettitle";
import CategoriesList from "../../ui/CategoriesList";

export default function PopularCategroies() {
  return (
    <div className="widget mt-8">
      <Widgettitle title="Popular Categories" />
      <div className="widget-content list-label">
        <ul>
          <CategoriesList />
        </ul>
      </div>
    </div>
  );
}
