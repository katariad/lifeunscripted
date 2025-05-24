import React from "react";
import PopularCategoriessingle from "./PopularcategoriesSingle";

export default function CategoriesList() {
  return (
    <>
      <PopularCategoriessingle
        count={1}
        url={"/categories/health-and-beauty-tips"}
        name="Health And Beauty Tips"
      />
      <PopularCategoriessingle
        count={2}
        url={"/categories/fashion-and-lifestyle"}
        name="Fashion And LifeStyle"
      />
      <PopularCategoriessingle
        count={3}
        url={"/categories/sports-and-fitness"}
        name="Sports And Fitness"
      />

      <PopularCategoriessingle
        count={4}
        url={"/categories/online-passive-income"}
        name="Online Passive Income"
      />
    </>
  );
}
