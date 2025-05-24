import { useEffect, useRef } from "react";

export function useStickySidebar({
  containerSelector,
  minWidth = 765,
  marginTop = 20,
  marginBottom = 20,
}: {
  containerSelector: string;
  minWidth?: number;
  marginTop?: number;
  marginBottom?: number;
}) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const container = document.querySelector(containerSelector) as HTMLElement;

    if (!sidebar || !container) return;

    let ticking = false;

    const updateSidebar = () => {
      if (window.innerWidth < minWidth) {
        sidebar.style.position = "static";
        sidebar.style.top = "auto";
        sidebar.style.transform = "none";
        return;
      }

      const sidebarHeight = sidebar.offsetHeight;
      // const containerRect = container.getBoundingClientRect();
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;

      const scrollY = window.scrollY;
      const maxScrollTop =
        containerTop + containerHeight - sidebarHeight - marginBottom;

      if (sidebarHeight > containerHeight) {
        // prevent sticky logic if sidebar is taller than container
        sidebar.style.position = "static";
        sidebar.style.top = "auto";
        sidebar.style.transform = "none";
        return;
      }

      if (
        scrollY + marginTop > containerTop &&
        scrollY + marginTop < maxScrollTop
      ) {
        sidebar.style.position = "fixed";
        sidebar.style.top = `${marginTop}px`;
        sidebar.style.transform = "none";
        sidebar.style.maxWidth = "278px";
      } else if (scrollY + marginTop >= maxScrollTop) {
        sidebar.style.position = "absolute";
        sidebar.style.top = `${
          containerHeight - sidebarHeight - marginBottom
        }px`;
        sidebar.style.transform = "none";
      } else {
        sidebar.style.position = "static";
        sidebar.style.top = "auto";
        sidebar.style.transform = "none";
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateSidebar();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateSidebar);

    updateSidebar();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateSidebar);
    };
  }, [containerSelector, minWidth, marginTop, marginBottom]);

  return sidebarRef;
}
