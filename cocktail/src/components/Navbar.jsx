/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ListItem, SocialComponent } from "../utils/ListItem";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [show, setShow] = useState("");
  const linkContainerRef = useRef(null);
  const linkListRef = useRef(null);

  function handleNavbar() {
    setIsNavbarVisible(!isNavbarVisible);
  }

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

  // console.log(isNavbarVisible);

  return (
    <nav className="bg-white p-4 shadow-md">
      <header className="flex flex-row justify-between text-lg font-semibold text-violet-800">
        <Link to="/">Cocktail Wiki</Link>

        <button onClick={handleNavbar}>
          <FaBars className="text-xl transition-all hover:rotate-90 md:hidden" />
        </button>
      </header>

      <div
        className={`transition-all duration-300 md:hidden`}
        ref={linkContainerRef}
      >
        {isNavbarVisible ? (
          <section
            className={`${show} mt-4 transition-opacity duration-700`}
            ref={linkListRef}
          >
            <ListItem classItem={"flex flex-col gap-2"} />
            <SocialComponent classSocial="flex flex-row gap-2 my-4 pt-2 justify-center" />
          </section>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
