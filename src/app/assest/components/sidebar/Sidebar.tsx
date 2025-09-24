"use client";

import Subscribeus from "./Subscribeus";
import Socialwidget from "./Socialwidget";
import PopularCategroies from "./PopularCategroies";
import { useStickySidebar } from "../../scripts/useStickySidebar";

export default function Sidebar() {
  const sidebarRef = useStickySidebar({ containerSelector: "#main-container" });
  return (
    <div ref={sidebarRef} className="sidebar min-h-[947px] ">
      <Subscribeus />
      <Socialwidget />
      <PopularCategroies />
    </div>
  );
}
