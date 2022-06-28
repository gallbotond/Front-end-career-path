import React from 'react'
import {useLocation, useParams, useNavigate} from 'react-router-dom'
import { getInvoice, deleteInvoice } from '../src/data'

export default function Invoice() {
  let params = useParams()
  let invoice = getInvoice(parseInt(params.invoiceID, 10))
  let location = useLocation()
  let navigate = useNavigate()

  return (
    <main>
      <h2>Total due: {invoice.amount}</h2>
      <p>{invoice.name}: {invoice.number}</p>
      <p>Due date: {invoice.due}</p>
      <button 
        onClick={() => {
          deleteInvoice(invoice.number)
          navigate('/invoices' + location.search)
        }}
      >
        Delete
      </button>
    </main>) 
}