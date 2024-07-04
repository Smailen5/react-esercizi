import React from "react";
import CartItem from "./CartItem";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useGlobalContext } from "../context/context";
// console.log(product)

const Cart = () => {
  const { cartProducts: products } = useGlobalContext();

  // il fetch funziona
  if (products.length > 0) {
    console.log(products);
  }

  return (
    <section className="section-center" style={{ marginTop: "2rem" }}>
      <div className="cart-info">
        <h6>Item</h6>
        <h6 className="prd-name">Nome</h6>
        <h6>Qty</h6>
        <h6>Prezzo</h6>
        <button className="btn icon-btn" aria-label="elimina tutto il carrello">
          <MdRemoveShoppingCart className="icon minus-icon" />
        </button>
      </div>
      <hr />
      <section className="cart-section">
        {products.map((products) => (
          <CartItem key={products._id} {...products} />
        ))}
      </section>
    </section>
  );
};

export default Cart;
