import React from 'react'
import { useParams } from 'react-router-dom'

export default function Invoice() {
  let params = useParams()
  console.log(params)
  return (
    <div>Invoice: {params.invoiceID}</div>
  )
}
