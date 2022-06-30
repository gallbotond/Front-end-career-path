import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Product from './routes/Product'
import Products from './routes/Products'

export default function App() {
  return (
    <div>
      <nav>
        <Link to='/home'>HOME</Link>
        <Link to='/products'>PRODUX</Link>
      </nav>

      <BrowserRouter>
        <Route path='/' element={<App />}>
          <Route path='/products' element={<Products />}>
            <Route path='/products/:id' element={<Product />} />
          </Route>
        </Route>
      </BrowserRouter>
    </div>
  )
}
