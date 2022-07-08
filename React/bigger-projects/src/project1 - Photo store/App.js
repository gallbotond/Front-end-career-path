import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Photos from './pages/Photos'


export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Outlet />
    </div>
  )
}
