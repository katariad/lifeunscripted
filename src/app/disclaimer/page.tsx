import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Life Unscripted",
  description:
    "Read the disclaimer for Life Unscripted regarding accuracy, liability, and affiliate disclosure. Stay informed about our content guidelines.",
  alternates: {
    canonical: "https://www.lifeunscripted.site/disclaimer",
  },
  openGraph: {
    type: "website",
    url: "https://www.lifeunscripted.site/disclaimer",
    title: "Disclaimer | Life Unscripted",
    description:
      "Understand the terms and conditions, liability disclaimers, and content accuracy policies at Life Unscripted.",
    images: [
      {
        url: "https://www.lifeunscripted.site/ogimage.jpg", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Disclaimer - Life Unscripted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Life Unscripted",
    description:
      "Read our disclaimer to understand our stance on liability, accuracy, and affiliate partnerships.",
    images: ["https://www.lifeunscripted.site/ogimage.jpg"], // Replace with your image
  },
};
export default function page() {
  return (
    <div className="postcontent">
      <h1>Disclaimer</h1>

      <p>The content on this blog is for general information only.</p>

      <p>
        We try to keep the information correct and up to date, but we cannot
        guarantee that everything is 100% accurate.
      </p>

      <p>
        The views expressed in the articles are the authors own. They do not
        necessarily reflect the views of this website.
      </p>

      <p>We are not responsible for any errors or omissions in the content.</p>

      <p>
        We are not liable for any losses or damages from using this website.
      </p>

      <p>
        Some links may go to external websites. We do not control these sites
        and are not responsible for their content.
      </p>

      <p>By using this site, you agree to this disclaimer.</p>

      <p>If you don&apos;t agree, please don&apos;t use this website.</p>

      <p>This disclaimer may change without notice.</p>

      <p>
        For more information read our &nbsp;
        <Link href="/privacy-policy">Privacy Policy</Link>&nbsp; and &nbsp;
        <Link href={"/terms-and-conditions"}>Terms and Conditions.</Link>
      </p>

      <p>Last updated: May 20,2025</p>
    </div>
  );
}
