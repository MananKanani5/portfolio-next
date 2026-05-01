"use client";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  let menuHandle = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navOffset = 100;

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

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => setIsLargeScreen(e.matches);
    setIsLargeScreen(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
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
      <header className="max-w-[90%]! xl:max-w-7xl! container mx-auto fixed top-6 left-0 right-0 z-[999] rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] lg:pl-8 lg:pr-2 px-5 animate__animated animate__fadeInDown py-2 flex items-center justify-between">
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
          className={`flex items-center text-lighttext gap-10  ${isMenuOpen ? "max-sm:flex" : "max-sm:hidden"} max-sm:absolute max-sm:bg-white/10 max-sm:flex-col max-sm:w-full max-sm:left-0 max-sm:top-18 max-sm:rounded-3xl max-sm:backdrop-blur-xl max-sm:border max-sm:border-white/10 max-sm:shadow-[0_4px_30px_rgba(0,0,0,0.1)] max-sm:gap-5 max-sm:z-50`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`duration-300 max-sm:w-full max-sm:py-3 max-sm:px-4 max-sm:text-center max-sm:rounded-lg max-sm:hover:bg-white/10 max-sm:transition-colors hover:text-primaryHover ${theme === "light" ? "text-darktext" : "text-lighttext"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className={`hidden lg:inline-block bg-primary hover:bg-primaryHover text-lighttext duration-300 lg:px-7 lg:py-2.5 px-5 py-2 rounded-full ${theme === "light" ? "bg-darktext text-lighttext" : "bg-lighttext text-darktext"}`}
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
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {!isMenuOpen ? (
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
