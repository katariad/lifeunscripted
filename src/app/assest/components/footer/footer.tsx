import React from "react";
import Upperfooter from "./Upperfooter";
import BackToTop from "../../scripts/commonscrpt";

export default function footer() {
  return (
    <footer className="bg-black text-amber-50 box-border mt-7 p-1 ">
      <section className="flex flex-col justfiy-center ">
        <Upperfooter />
        <div className="text-center">
          <p>Designed by Dkataria &#169; 2025-2026</p>
          <div
            className="back-top"
            title="Back to Top"
            style={{ display: "block" }}
          ></div>
        </div>
        <BackToTop />
      </section>
    </footer>
  );
}
