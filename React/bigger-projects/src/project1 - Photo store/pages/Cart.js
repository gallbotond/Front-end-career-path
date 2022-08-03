import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { CustomContext } from "../context/customContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CustomContext);
  const [buttonText, setButtonText] = useState("Place Order");

  const emptyCart = () => {
    setButtonText("Placing Order...");
    setTimeout(() => {
      cartItems.map((item) => {
        removeFromCart(item);
      });
      setButtonText("Place Order");
    }, 1000);
  };

  return (
    <main className="cart-page">
      <div className="container">
        <div className="subcontainer">
          <h1>Check out</h1>
          <div className="total-text">
            <p>Total: {cartItems.length * 5 + "$"}</p>
            <button className="total-text" disabled={cartItems.length == 0} onClick={() => emptyCart()}>
              {buttonText}
            </button>
          </div>
        </div>
        <div>
          {cartItems.length == 0 ? 'Cart is empty' : cartItems.map((img, id) => (
            <CartItem key={id} item={img} />
          ))}
        </div>
      </div>
    </main>
  );
}
