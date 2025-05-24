import React from "react";
import Widgettitle from "../../ui/Widgettitle";
import RecentList from "../../ui/RecentPostList";

export default function RecentPost() {
  return (
    <div>
      <Widgettitle title="Recents Post" />
      <RecentList />
    </div>
  );
}
