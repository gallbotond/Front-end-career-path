import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getData } from './data'
// import Product from './routes/Product'
// import Products from './routes/Products'

export default function App() {
  console.log('app', getData())
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
