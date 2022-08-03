import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomContext } from "../context/customContext";

export default function Header() {
  const { cartItems } = useContext(CustomContext);
  return (
    <header>
      <div className="container">
        <Link to="/photos">
          <h2>Pic Some</h2>
        </Link>
        <div className="icon-container">
          <Link to="/">
            <i className="ri-home-5-line ri-2x"></i>
          </Link>
          <Link to="/cart">
            <i
              className={`ri-shopping-cart-${
                cartItems.length === 0 ? "line" : "fill"
              } ri-fw ri-2x`}
            ></i>
          </Link>
        </div>
      </div>
    </header>
  );
}
