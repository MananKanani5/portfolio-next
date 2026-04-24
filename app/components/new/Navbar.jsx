"use client";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [theme, setTheme] = useState("dark");

  let menuHandle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.remove("no-scroll", isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navOffset = 100; // navbar height

      let currentTheme = "dark";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= navOffset && rect.bottom >= navOffset) {
          const theme = section.getAttribute("data-theme");
          if (theme) currentTheme = theme;
        }
      });

      setTheme(currentTheme);
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/portfolio",
    },
    {
      label: "Contact Me",
      href: "/contact",
    },
  ];

  return (
    <>
      <header className="max-w-[90%] lg:max-w-7xl container mx-auto fixed top-7 left-0 right-0 z-[999] rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] lg:pl-8 lg:pr-3 px-5 animate__animated animate__fadeInDown py-3 flex items-center justify-between">
        <Link href={"/"} className="logo z-50">
          <span
            className={`font-bold text-3xl z-[999] ${theme === "light" ? "text-darktext" : "text-lighttext"} duration-300`}
          >
            MK.
          </span>
        </Link>

        <nav
          id="mobile-nav"
          aria-label="Main navigation"
          className={`navbar flex gap-10 items-center text-lighttext max-sm:flex-col max-sm:fixed max-sm:bg-white/30 max-sm:w-full max-sm:h-fit max-sm:mt-20 max-sm:top-0 max-sm:left-0 duration-300 max-sm:backdrop-blur-2xl z-[9999] max-sm:rounded-3xl max-sm:py-5 max-sm:gap-4 max-sm:hidden ${isMenuOpen ? "max-sm:block" : "max-sm:hidden"}`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`duration-300 max-sm:w-full max-sm:py-2 max-sm:text-center ${theme === "light" ? "text-darktext" : "text-lighttext"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className={`bg-primary hover:bg-primaryHover text-lighttext duration-300 lg:px-7 lg:py-3 px-5 py-2 rounded-full ${theme === "light" ? "bg-darktext text-lighttext" : "bg-lighttext text-darktext"}`}
            href="https://drive.google.com/file/d/1HjANFa43BbzdEr10es6t9ABqOeuSyKCE/view?usp=sharing"
            onClick={closeMenu}
            target="_blank"
            aria-label="Download resume"
          >
            Resume
          </a>

          <button
            onClick={menuHandle}
            className="max-sm:block hidden z-[999]"
            aria-label={
              isMenuOpen ? "Open navigation menu" : "Close navigation menu"
            }
            aria-expanded={!isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? (
              <RiMenu2Line
                className={` ${theme === "light" ? "text-darktext" : "text-lighttext"} duration-300`}
              />
            ) : (
              <RiCloseLine
                className={` ${theme === "light" ? "text-darktext" : "text-lighttext"} duration-300`}
              />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
