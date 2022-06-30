import React from 'react'
import { BrowserRouter, Link, Outlet, Route } from 'react-router-dom'
import Product from './routes/Product'
import Products from './routes/Products'

export default function App() {
  return (
    <div>
      <nav>
        <Link to='/'>HOME</Link> | {''}
        <Link to='/products'>PRODUX</Link>
      </nav>

      <Outlet />
    </div>
  )
}
