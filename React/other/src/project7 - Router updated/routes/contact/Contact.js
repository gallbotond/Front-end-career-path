import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getInvoices } from '../../src/data'

export default function Contact() {
  let invoices = getInvoices()
  // console.log(invoices)
  return (
    <div>
      {invoices.map(invoice => <Link to={`/profile/${invoice.number}`} key={invoice.number}>{invoice.name}</Link>)}
      <Outlet />
    </div>
  )
}
