import './assets/style.css'

import { BrowserRouter } from 'react-router-dom'

import PhotoApp from './App'
import { CustomContextProvider } from './context/customContext'

export default function App() {
  return(
    <CustomContextProvider>
      <BrowserRouter>
        <PhotoApp />
      </BrowserRouter>  
    </CustomContextProvider>
  )
}