"use client";

import Subscribeus from "./Subscribeus";
import Socialwidget from "./Socialwidget";
import PopularCategroies from "./PopularCategroies";
import { useStickySidebar } from "../../scripts/useStickySidebar";
import Popularpost from "./Popularpost";

export default function Sidebar() {
  const sidebarRef = useStickySidebar({ containerSelector: "#main-container" });
  return (
    <div ref={sidebarRef} className="sidebar">
      <Subscribeus />
      <Socialwidget />
      <Popularpost />
      <PopularCategroies />
    </div>
  );
}
