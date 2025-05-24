"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Menulink from "../../ui/menuListlink";
import Menulistdropdown from "../../ui/Menulistdropdown";
import { fetchCategoriesWithPosts } from "@/lib/fetchCategoriesWithPosts";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NavigationMenu() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [categories, setCategories] = useState<
    { name: string; slug: string }[]
  >([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategoriesWithPosts();
        const unique = data.map(({ name, slug }) => ({
          name,
          slug: `${slug}`,
        }));
        setCategories(unique);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };
    loadCategories();
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (isMobileOpen) setIsMobileOpen(false);
  };

  const toggleMobile = () => {
    setIsMobileOpen((prev) => !prev);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  // search bar function
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.trim() !== "") {
      router.push(`/?q=${encodeURIComponent(query)}`);
    } else {
      router.push("/"); // revert to default
    }
  };

  return (
    <>
      <nav className="mainmenu  top-0 z-30 bg-white shadow px-4 py-2 flex items-center justify-between md:justify-center">
        <div className="md:hidden cursor-pointer" onClick={toggleMobile}>
          {isMobileOpen ? (
            <IoClose size="1.5em" style={{ color: "whitesmoke" }} />
          ) : (
            <GiHamburgerMenu size="1.5em" style={{ color: "whitesmoke" }} />
          )}
        </div>

        {!isSearchOpen && (
          <menu className="hidden md:flex space-x-4">
            <ul className="flex space-x-2 items-center">
              <Menulink linkurl="/" text="Home" />
              <Menulink linkurl="/about" text="About" />
              <Menulistdropdown linkurl="/categories" text="Categories">
                {categories.map((cat) => (
                  <Menulink key={cat.slug} linkurl={cat.slug} text={cat.name} />
                ))}
              </Menulistdropdown>
              {/* <Menulistdropdown linkurl="/tools" text="Tools">
                <Menulink linkurl="#" text="Tool 1" />
                <Menulink linkurl="#" text="Tool 2" />
              </Menulistdropdown> */}
              <Menulink linkurl="/sitemap" text="Sitemap" />
              <Menulink linkurl="/contact" text="Contact" />
            </ul>
          </menu>
        )}

        <div className="flex items-center space-x-2">
          {isSearchOpen && (
            <form action="/search" method="GET">
              <input
                type="text"
                name="q"
                placeholder="Search your blog"
                autoComplete="off"
                value={searchTerm}
                onChange={handleSearch}
                autoFocus
                className="searchbar text-amber-50 px-2 py-1 rounded border placeholder:text-gray-400"
              />
            </form>
          )}
          <div onClick={toggleSearch} className="cursor-pointer">
            {isSearchOpen ? (
              <IoClose size="1.5em" style={{ color: "whitesmoke" }} />
            ) : (
              <FaSearch size="1.25em" style={{ color: "whitesmoke" }} />
            )}
          </div>
        </div>
      </nav>

      <div className="relative md:hidden">
        <AnimatePresence>
          {isMobileOpen && (
            <motion.menu
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="mobile_menu md:hidden  py-4"
            >
              <menu className="">
                <ul className="space-y-3">
                  <Menulink linkurl="/" text="Home" />
                  <Menulink linkurl="/about" text="About" />
                  <li>
                    <details className="group">
                      <summary className="cursor-pointer text-amber-50 ">
                        Categories
                      </summary>
                      <ul className="pl-4 mt-1 space-y-1">
                        {categories.map((cat) => (
                          <li key={cat.slug}>
                            <Link
                              href={cat.slug}
                              className="block hover:underline text-white!"
                            >
                              {cat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                  <Menulink linkurl="/sitemap" text="Sitemap" />
                  <Menulink linkurl="/contact" text="Contact" />
                </ul>
              </menu>
            </motion.menu>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
