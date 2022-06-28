import React from 'react'
import {useParams} from 'react-router-dom'
import { getInvoice } from '../src/data'

export default function Invoice() {
  let params = useParams()
  let invoice = getInvoice(parseInt(params.invoiceID, 10))
  return (
    <main>
      <h2>Total due: {invoice.amount}</h2>
      <p>{invoice.name}: {invoice.number}</p>
      <p>Due date: {invoice.due}</p>
    </main>) 
}