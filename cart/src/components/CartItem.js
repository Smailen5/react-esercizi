import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from "../context/context";

const CartItem = ({ _id, image, price, name, qty, countInStock }) => {
  const { deleteProduct, addQty, removeQty } = useGlobalContext();

  // controlla se il prodotto è in stock
  const aggiungiQty = (_id) => {
    if (qty + 1 > countInStock) {
      return;
    }
    return addQty(_id);
  };

  // se il prodotto arriva a 0 lo elimina dal carrello
  const rimuoviQty = (_id) => {
    if (qty - 1 > 0) {
      return removeQty(_id);
    }
    return deleteProduct(_id);
  };
  
  return (
    <article id={_id} className="cart-item">
      {/* immagine e testo */}
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <p className="prd-name">{name}</p>

      {/* selettore quantità + o - */}
      <div className="qty-selector">
        <button
          className="btn icon-btn"
          aria-label="aumenta prodotto"
          onClick={() => aggiungiQty(_id)}
        >
          <BiPlus className="icon" />
        </button>
        <p>{qty}</p>
        <button
          className="btn icon-btn"
          aria-label="diminuisci prodotto"
          onClick={() => rimuoviQty(_id)}
        >
          <BiMinus className="icon minus-icon" />
        </button>
      </div>

      {/* prezzo, bottone elimina prodotto */}
      <p>{price}€</p>
      <button
        className="btn icon-btn"
        aria-label="elimina prodotto"
        onClick={() => deleteProduct(_id)}
      >
        <MdDelete className="icon minus-icon" />
      </button>
    </article>
  );
};

export default CartItem;
