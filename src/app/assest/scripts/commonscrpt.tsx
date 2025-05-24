// Example: components/BackToTop.tsx
"use client";

import { useEffect } from "react";

export default function BackToTop() {
  useEffect(() => {
    const backTopBtns = document.querySelectorAll(".back-top");

    const onScroll = () => {
      backTopBtns.forEach((btn) => {
        if (window.scrollY >= 100) {
          (btn as HTMLElement).style.display = "block";
        } else {
          (btn as HTMLElement).style.display = "none";
        }
      });
    };

    const onClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", onScroll);
    backTopBtns.forEach((btn) => btn.addEventListener("click", onClick));

    return () => {
      window.removeEventListener("scroll", onScroll);
      backTopBtns.forEach((btn) => btn.removeEventListener("click", onClick));
    };
  }, []);

  return null;
}
