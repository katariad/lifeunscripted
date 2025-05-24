import React from "react";
import SinglepageList from "./SinglepageList";

export default function Pageslist() {
  return (
    <div className="list-label">
      <ul>
        <SinglepageList url={"/about"} text="About us" />
        <SinglepageList url={"/contact"} text="Contact Us" />
        <SinglepageList url={"/privacy-policy"} text=" Privacy Policy" />
        <SinglepageList
          url={"/terms-and-conditions"}
          text="Terms and Conditions"
        />
        <SinglepageList url={"/disclaimer"} text="Disclaimer " />
      </ul>
    </div>
  );
}
