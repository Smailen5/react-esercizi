import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { SocialBar, links } from "./links";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const linkContainerRef = useRef(null);
  const linkListRef = useRef(null);
  const [show, setShow] = useState("");

  function handleClick() {
    setIsNavbarVisible(!isNavbarVisible);
  }

  // Funzione che gestisce la visibilità del linkList e la sua dimensione dinamicamente
  useEffect(() => {
    if (isNavbarVisible) {
      const linkHeight = linkListRef.current.clientHeight;
      linkContainerRef.current.style.height = `${linkHeight}px`;
      setShow("opacity-100");
    } else {
      linkContainerRef.current.style.height = "0px";
      setShow("opacity-0");
    }
  }, [isNavbarVisible]);

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
        <div
          className={`transition-all duration-300 md:hidden`}
          ref={linkContainerRef}
        >
          {isNavbarVisible ? (
            <ul
              className={`${show} mt-4 transition-opacity duration-700`}
              ref={linkListRef}
            >
              {links.map((link) => (
                <li
                  key={link.id}
                  className="transition-all hover:scale-102 hover:bg-sky-50 hover:font-semibold hover:text-sky-300"
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
