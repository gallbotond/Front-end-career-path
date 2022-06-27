import React from "react";
import {Link} from 'react-router-dom'
import { getInvoices } from "../src/data";

export default function Invoices() {
  let invoices = getInvoices()
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      {invoices.map(invoice => <Link to={`/invoices/${invoice.number}`} key={invoice.name}>{invoice.name}<br /></Link>)}
    </main>
  );
}