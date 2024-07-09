/* eslint-disable no-unused-vars */
import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LinkComponent, SocialComponent } from "../utils/links";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Cocktail Wiki</Link>
        </li>
        <div>
          <button><FaBars /></button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
