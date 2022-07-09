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

  return (
    <CustomContext.Provider value={{pictures}}>
      {props.children}
    </CustomContext.Provider>
  )
}

export {CustomContext, CustomContextProvider}