import React, { useEffect }  from "react"
import { useState } from "react"

const CustomContext = React.createContext()

function CustomContextProvider(props) {

  const [pictures, setPictures] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(res => res.json())
      .then(data => setPictures(data))
  }, [])

  const toggleFavorite = id => {
    const newPictures = pictures.map(image => {
      if(image.id === id) {
        console.log(id, !image.isFavorite)
        return {
          ...image,
          isFavorite: !image.isFavorite
        }
      }
      return image
    })

    setPictures(newPictures)
  }

  return (
    <CustomContext.Provider value={{pictures, toggleFavorite}}>
      {props.children}
    </CustomContext.Provider>
  )
}

export {CustomContext, CustomContextProvider}