/* eslint-disable no-unused-vars */
import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "./links";
const Navbar = () => {
  const { openSidebar } = useGlobalContext()
  // console.log(openSidebar)
  return (
    <nav className="nav">
      <header className="nav-header">
        <div className="nav-brand">
          <h4>Smailen</h4>
        </div>
        <button onClick={openSidebar} className="btn nav-toggler">
          <FaBars className="nav-icon" />
        </button>
      </header>
      <div className="links-container">
        <ul className="nav-links">
          {
            links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
      <div className='social-links'>
        <SocialBar />
      </div>
    </nav>
  );
};

export default Navbar;
