import React from "react";
import RecentPost from "./RecentPost";
import Footercategory from "./Footercategory";
import Pagesmain from "./Pagesmain";
import RecentUpdatedPost from "./RecentUpdatedPost";

export default function Upperfooter() {
  return (
    <div className="flex p-9 justify-center align-middle gap-3 flex-wrap md:flex-nowrap  ">
      <div className=" w-full md:flex-1/3">
        <RecentPost />
      </div>

      <div className=" w-full  md:flex-1/3">
        <Footercategory />
        <Pagesmain />
      </div>

      <div className=" w-full md:flex-1/3">
        <RecentUpdatedPost />
      </div>
    </div>
  );
}
