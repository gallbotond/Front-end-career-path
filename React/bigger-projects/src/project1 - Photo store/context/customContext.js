import React, { useEffect } from "react";
import { useState } from "react";

const CustomContext = React.createContext();

function CustomContextProvider(props) {
  const [pictures, setPictures] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setPictures(data));
  }, []);

  const toggleFavorite = (id) => {
    const newPictures = pictures.map((image) => {
      if (image.id === id) {
        // console.log(id, !image.isFavorite)
        return {
          ...image,
          isFavorite: !image.isFavorite,
        };
      }
      return image;
    });

    setPictures(newPictures);
  };

  const addToCart = (img) => setCartItems((prev) => [...prev, img]);

  const removeFromCart = (img) =>
    setCartItems((prev) => prev.filter((item) => item.id != img.id));

  return (
    <CustomContext.Provider
      value={{ pictures, toggleFavorite, addToCart, removeFromCart, cartItems }}
    >
      {props.children}
    </CustomContext.Provider>
  );
}

export { CustomContext, CustomContextProvider };
