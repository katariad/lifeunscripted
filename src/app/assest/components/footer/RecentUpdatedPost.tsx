import React from "react";
import Widgettitle from "../../ui/Widgettitle";
import UpdatedPostList from "../../ui/UpdatedPostList";
export default function RecentUpdatedPost() {
  return (
    <div>
      <Widgettitle title="Recent updated post" />
      <UpdatedPostList />
    </div>
  );
}
