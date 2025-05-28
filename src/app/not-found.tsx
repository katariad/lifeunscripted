import Link from "next/link";
import { BsConeStriped } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
const staticPages = [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Categories", href: "/categories" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms and Condition", href: "/terms-and-conditions" },
  { title: "Disclaimer", href: "/disclaimer" },
];
export default function NotFound() {
  return (
    <div className="text-center postcontent ">
      <h1 className="flex justify-center items-center m-1! ">
        <BsConeStriped />
        Oops 404! Not Found
      </h1>
      <p>Could not find requested resource</p>
      <Link href="/" className="flex items-center justify-center gap-1 ">
        <FaHome />
        Return Home
      </Link>
      <ul className="text-left">
        {staticPages.map((page) => (
          <li key={page.href}>
            <Link
              href={page.href}
              className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
