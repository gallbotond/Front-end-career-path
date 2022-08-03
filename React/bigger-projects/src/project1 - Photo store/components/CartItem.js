import React, { useContext, useState } from "react";
import { CustomContext } from "../context/customContext";
import PropTypes from "prop-types";

export default function CartItem({ item }) {
  const [hovered, setHovered] = useState(false);
  const { removeFromCart } = useContext(CustomContext);

  return (
    <div className="cart-item">
      <div
      className="image-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={item.url}></img>
        <div className="inside-image">
          {hovered && (
            <i
              className="ri-delete-bin-line"
              onClick={() => removeFromCart(item)}
            ></i>
          )}
        </div>
      </div>
      <p>$5.00</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
}

{
  /* <div
  className={`image-container ${className}`}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  <img src={img.url} className="image-grid" />
  <div className="inside-image">
    {hovered && (
      <i
        className={`ri-add-circle-${isInCart(img) ? "fill" : "line"} cart`}
        onClick={
          isInCart(img) ? () => removeFromCart(img) : () => addToCart(img)
        }
      ></i>
    )}
    {hovered && (
      <i
        className={`ri-heart-${img.isFavorite ? "fill" : "line"} favorite`}
        onClick={() => toggleFavorite(img.id)}
      ></i>
    )}
  </div>
</div>; */
}
