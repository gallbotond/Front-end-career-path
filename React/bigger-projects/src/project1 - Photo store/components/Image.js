import React, { useContext, useState } from "react";
import { CustomContext } from "../context/customContext";

export default function Image({ className, img }) {
  const [hovered, setHovered] = useState(false)
  const {toggleFavorite} = useContext(CustomContext)

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
            className={`ri-heart-${img.isFavorite ? "fill" : "line"} favorite`}
            onClick={() => toggleFavorite(img.id)}
          ></i>
        )}
        {hovered && <i className="ri-add-circle-line cart"></i>}
      </div>
    </div>
  );
}
