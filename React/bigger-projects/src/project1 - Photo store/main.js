import './assets/style.css'

import { BrowserRouter } from 'react-router-dom'

import PhotoApp from './App'

export default function App() {
  return(
    <BrowserRouter>
      <PhotoApp />
    </BrowserRouter>  
  )
}