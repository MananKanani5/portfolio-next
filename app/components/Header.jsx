"use client";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  let menuHandle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.remove("no-scroll", isMenuOpen);
  };

  return (
    <header className=" w-full bg-secondary sticky top-0 z-[999] max-sm:-mb-1 max-sm:p-0">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between animate__animated animate__fadeInDown max-sm:p-5 py-5">
        <Link href={"/"} className="logo z-50">
          <span className="text-lighttext font-bold text-3xl z-[999]">MK.</span>
        </Link>

        <button
          onClick={menuHandle}
          className="max-sm:block hidden z-[999]"
          aria-label={isMenuOpen ? "Open navigation menu" : "Close navigation menu"}
          aria-expanded={!isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? (
            <RiMenu2Line className="text-lighttext" />
          ) : (
            <RiCloseLine className="text-lighttext" />
          )}
        </button>

        <nav
          id="mobile-nav"
          aria-label="Main navigation"
          className={`navbar flex gap-6 items-center text-lighttext max-sm:flex-col max-sm:fixed max-sm:bg-secondary max-sm:z-50 max-sm:w-full max-sm:h-screen max-sm:top-0 max-sm:pt-24 max-sm:left-0 duration-300 ${
            isMenuOpen ? "max-sm:translate-x-full" : "max-sm:translate-x-0"
          }`}
        >
          <Link
            className="hover:text-primaryHover duration-300 max-sm:w-full max-sm:py-2 max-sm:text-center"
            href={"/"}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            className="hover:text-primaryHover duration-300 max-sm:w-full max-sm:py-2 max-sm:text-center"
            href={"/about"}
            onClick={closeMenu}
          >
            About Me
          </Link>
          <Link
            className="hover:text-primaryHover duration-300 max-sm:w-full max-sm:py-2 max-sm:text-center"
            href={"/portfolio"}
            onClick={closeMenu}
          >
            Portfolio
          </Link>
          <Link
            className="hover:text-primaryHover duration-300 max-sm:w-full max-sm:py-2 max-sm:text-center"
            href={"/contact"}
            onClick={closeMenu}
          >
            Contact Me
          </Link>
          <a
            className="bg-primary hover:bg-primaryHover duration-300 px-5 py-2 rounded-xl"
            href="https://drive.google.com/file/d/1nSBoX8pRFltfqzYA6lWZtvNp8CAe6_FE/view?usp=drive_link"
            onClick={closeMenu}
            target="_blank"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
