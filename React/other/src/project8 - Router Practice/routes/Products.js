import React from 'react'
import { NavLink } from 'react-router-dom'
import getData from '../data'

export default function Products() {
  console.log('prod', getData())
  return (
    <div>
      {products.map((product) => <NavLink to={`/products/${product.id}`} key={product.id}>{product.name}</NavLink>)}
    </div>
  )
}
