import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { amountItemCart } = useGlobalContext()
  return (
    <nav className="nav">
      <header className="nav-header">
        <div className="nav-brand">
          <h4>Shopposo</h4>
        </div>
        <div className="nav-cart">
          <HiShoppingCart className="icon nav-icon" />
          <div className="cart-counter">{amountItemCart}</div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
