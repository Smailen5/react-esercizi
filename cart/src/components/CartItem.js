import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from "../context/context";

const CartItem = ({ id, image, price, name, countInStock }) => {
  const { isLoading, provaReducer } = useGlobalContext();
  // console.log(isLoading);

  return (
    <article className="cart-item">
      {/* immagine */}
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <p className="prd-name">{name}</p>

      {/* selettore quantità */}
      <div className="qty-selector">
        <button className="btn icon-btn">
          <BiPlus className="icon" />
        </button>
        <p>1</p>
        <button className="btn icon-btn">
          <BiMinus className="icon minus-icon" />
        </button>
      </div>

      {/* prezzo */}
      <p>{price}€</p>
      <button onClick={provaReducer} className="btn icon-btn">
        <MdDelete className="icon minus-icon" />
      </button>
    </article>
  );
};

export default CartItem;
