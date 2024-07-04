import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const CartItem = ({ id, image, price, name, countInStock }) => {

  return (
    <article className="cart-item">
      {/* immagine */}
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <p className="prd-name">{name}</p>

      {/* selettore quantità */}
      <div className="qty-selector">
        <button className="btn icon-btn" aria-label="aumenta prodotto">
          <BiPlus className="icon" />
        </button>
        <p>1</p>
        <button className="btn icon-btn" aria-label="diminuisci prodotto">
          <BiMinus className="icon minus-icon" />
        </button>
      </div>

      {/* prezzo */}
      <p>{price}€</p>
      <button className="btn icon-btn" aria-label="elimina prodotto">
        <MdDelete className="icon minus-icon" />
      </button>
    </article>
  );
};

export default CartItem;
