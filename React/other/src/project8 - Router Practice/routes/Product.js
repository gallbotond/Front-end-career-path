import React from 'react'

export default function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Price: {props.price}RON</p>
      <h1>Remaining {props.stoc} pieces</h1>
    </div>
  )
}
