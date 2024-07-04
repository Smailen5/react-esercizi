import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from "../context/context";

const CartItem = ({ _id, image, price, name, qty, countInStock }) => {
  const { deleteProduct, addQty, removeQty } = useGlobalContext();

  return (
    <article id={_id} className="cart-item">
      {/* immagine e testo */}
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <p className="prd-name">{name}</p>

      {/* selettore quantità + o - */}
      <div className="qty-selector">
        <button className="btn icon-btn" aria-label="aumenta prodotto" onClick={()=> addQty(_id)}>
          <BiPlus className="icon" />
        </button>
        <p>{qty}</p>
        <button className="btn icon-btn" aria-label="diminuisci prodotto" onClick={()=> removeQty(_id)}>
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
