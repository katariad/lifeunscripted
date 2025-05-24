import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="postcontent">
      <h1>Terms and Conditions</h1>
      <p>
        <strong>Last Updated:</strong> April,16 2025
      </p>

      <p>
        Welcome to <strong>Life Unscripted</strong>! These terms and conditions
        outline the rules and regulations for the use of our website, located at{" "}
        <Link href="/" target="_blank">
          www.lifeunscripted.site
        </Link>
        .
      </p>

      <h2>
        By accessing this website, we assume you accept these terms and
        conditions. Do not continue to use Life Unscripted if you do not agree
        to all of the terms and conditions stated on this page.
      </h2>

      <h2>Cookies</h2>
      <p>
        We use cookies to improve user experience. By accessing Life Unscripted,
        you agreed to use cookies in accordance with our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>License</h2>
      <p>
        Unless otherwise stated, Life Unscripted owns the intellectual property
        rights for all content on this website. You may access content for your
        personal use subject to restrictions set in these terms and conditions.
      </p>

      <p>You must not:</p>
      <ul>
        <li>Republish material from Life Unscripted</li>
        <li>Sell, rent or sub-license material</li>
        <li>Reproduce, duplicate or copy material</li>
        <li>Redistribute content from Life Unscripted without permission</li>
      </ul>

      <h2>Hyperlinking to Our Content</h2>
      <p>
        You may link to our homepage or blog posts as long as the link is not
        misleading, does not falsely imply sponsorship or endorsement, and fits
        within the context of the linking party’s site.
      </p>

      <h2>User Comments</h2>
      <p>
        Parts of this website may offer users an opportunity to post comments.
        Life Unscripted does not filter, edit, or review Comments prior to their
        presence on the website. Comments do not reflect the views of Life
        Unscripted, its agents, or affiliates.
      </p>

      <h2>Content Liability</h2>
      <p>
        We shall not be held responsible for any content that appears on your
        website if you link to us. You agree to protect and defend us against
        all claims arising on your website.
      </p>

      <h2>Reservation of Rights</h2>
      <p>
        We reserve the right to request that you remove all links or any
        particular link to our website. We also reserve the right to amend these
        terms and conditions at any time.
      </p>

      <h2>Removal of Links</h2>
      <p>
        If you find any link on our website offensive or inappropriate, please
        contact us. We will consider your request but are not obligated to
        remove it.
      </p>

      <h2>Disclaimer</h2>
      <p>
        To the maximum extent permitted by law, we exclude all representations,
        warranties and conditions relating to our website. Nothing in this
        disclaimer will limit or exclude liability for death or personal injury
        caused by negligence.For more information :{" "}
        <Link href={"/disclaimer"}>Click here</Link>
      </p>

      <h2>Contact Information</h2>

      <ul>
        <li>By email: lifeunscriptedblogs@gmail.com</li>
        <li>
          By visiting this page on our website:{" "}
          <a href="/contact" rel="external nofollow noopener" target="_blank">
            www.lifeunscripted.site/contact
          </a>
        </li>
      </ul>
    </div>
  );
}
