import React from "react";
import PopularCategoriessingle from "./PopularcategoriesSingle";

export default function FooterCategoryList() {
  return (
    <>
      <PopularCategoriessingle
        count={1}
        url={"/categories/finance"}
        name="finance"
      />
      <PopularCategoriessingle
        count={2}
        url={"/categories/news-hub"}
        name="news hubs"
      />
      <PopularCategoriessingle
        count={3}
        url={"/categories/technology-and-gadgets"}
        name="technology and gadgets"
      />
    </>
  );
}
