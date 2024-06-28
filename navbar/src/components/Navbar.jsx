// import { useState, useEffect, useRef } from "react";
import { useState } from "react";
import logo from "../assets/logo.svg";
// import { SocialBar } from "./links";
import { FaBars } from "react-icons/fa";
import { SocialBar, links } from "./links";
// import { links, SocialBar } from "./links";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  function handleClick() {
    setIsNavbarVisible(!isNavbarVisible);
  }

  return (
    <>
      <nav className="bg-white p-4 shadow-md">
        <div className="flex items-center justify-between md:justify-around">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-8 w-8" />
            <p>DevBar</p>
          </div>
          <FaBars
            className={`text-xl md:hidden md:${isNavbarVisible ? "rotate-90 transition-all" : "rotate-0 transition-all"} sm:hover:rotate-90 sm:hover:text-sky-300`}
            onClick={handleClick}
          />
          <div className="hidden md:flex gap-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                alt={link.text}
                className="font-semibold capitalize"
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            {SocialBar()}
          </div>
        </div>

        {isNavbarVisible ? (
          <ul
            className={`mt-4 animate-slide${isNavbarVisible ? "Down" : "Up"}`}
          >
            {links.map((link) => (
              <li
                key={link.id}
                className="sm:hover:scale-102 sm:transition-all sm:hover:bg-sky-50 sm:hover:font-semibold sm:hover:text-sky-300"
              >
                <a
                  href={link.url}
                  alt={link.text}
                  className="text-sm capitalize"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
