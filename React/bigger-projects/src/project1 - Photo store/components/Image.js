import React, { useContext, useState } from "react";
import { CustomContext } from "../context/customContext";
import PropTypes from "prop-types";

export default function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, removeFromCart, cartItems } = useContext(CustomContext);

  const isInCart = (img) => cartItems.includes(img);

  return (
    <div
      className={`image-container ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      <div className="inside-image">
        {hovered && (
          <i
            className={`ri-add-circle-${isInCart(img) ? "fill" : "line"} cart`}
            onClick={isInCart(img) ? () => removeFromCart(img) : () => addToCart(img)}
          ></i>
        )}
        {hovered && (
          <i
            className={`ri-heart-${img.isFavorite ? "fill" : "line"} favorite`}
            onClick={() => toggleFavorite(img.id)}
          ></i>
        )}
      </div>
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
