import Link from "next/link";
import React from "react";

export default function upperheadermenu() {
  return (
    <div className="hidden md:flex  gap-x-1 ">
      <ul className="flex gap-x-2.5">
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/disclaimer">Disclaimer</Link>
        </li>
      </ul>
    </div>
  );
}
