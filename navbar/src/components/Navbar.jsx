// import { useState, useEffect, useRef } from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { SocialBar, links } from "./links";

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
            <p className="md:text-xl md:font-semibold">DevBar</p>
          </div>
          {/* Bottone hamburger */}
          <FaBars
            className={`text-xl md:hidden md:${isNavbarVisible ? "rotate-90 transition-all" : "rotate-0 transition-all"} sm:hover:rotate-90 sm:hover:text-sky-300`}
            onClick={handleClick}
          />
          {/* Link per desktop */}
          <ul className="hidden gap-4 md:flex">
            {links.map((link) => (
              <li
                key={link.id}
                className="w-24 rounded-xl text-center transition-all hover:scale-110 hover:bg-sky-50 hover:text-sky-300"
              >
                <a
                  href={link.url}
                  alt={link.text}
                  className="font-semibold capitalize"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">{SocialBar()}</div>
        </div>

        {/* Menu a scomparsa */}
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
