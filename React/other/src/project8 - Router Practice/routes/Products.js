import React from 'react'
import { NavLink } from 'react-router-dom'
import { getData } from '../data'

export default function Products() {
  let products = getData()
  return (
    <div>
      {products.map(product => <NavLink to={`/products/${product.id}`}></NavLink>)}
    </div>
  )
}
