import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>Book keeper</h1>
      <nav>
        <Link to='/invoices'>Invoices</Link> | {''}
        <Link to='/expenses'>Expenses</Link> | {''}
        <Link to='/noroute'>No Route</Link>
      </nav>
      <Outlet />
    </div>
  )
}
