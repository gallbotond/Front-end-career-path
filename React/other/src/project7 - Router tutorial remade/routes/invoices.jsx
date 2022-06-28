import React from "react";
import {NavLink, Outlet, useSearchParams} from 'react-router-dom'
import { getInvoices } from "../src/data";

export default function Invoices() {
  let invoices = getInvoices()
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      <input
        value={searchParams.get('filter') || ''}
        onChange={e => {
          let filter = e.target.value;
          if (filter) {
            setSearchParams({filter})
          }
          else {
            setSearchParams({})
          }
        }}
      />
      <br />
      {invoices.filter(invoice => {
        let filter = searchParams.get('filter')
        if(!filter) return true
        let name = invoice.name.toLowerCase()
        return name.startsWith(filter.toLowerCase())
      })
      .map(invoice => 
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
          to={`/invoices/${invoice.number}`} key={invoice.name}>
            {invoice.name}<br />
        </NavLink>
      )}
      <Outlet />
    </main>
  );
}