import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ListItem, SocialComponent } from "../utils/linksComponent";

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
    <nav className="bg-white p-4 shadow-md lg:px-[5%] xl:px-[15%]">
      <header className="flex flex-row justify-between text-lg font-semibold text-violet-800 md:grid md:grid-cols-4">
        <Link to="/" className="uppercase hover:text-pink-500">
          Cocktail Wiki
        </Link>
        <button onClick={handleNavbar} className="md:hidden">
          <FaBars className="text-xl transition-all hover:rotate-90 hover:text-pink-500" />
        </button>
        <ListItem classItem={"md:flex justify-between hidden col-span-2"} />
        <SocialComponent classSocial="md:flex justify-end items-center hidden" />
      </header>

      {/* Menu smartphone */}
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
