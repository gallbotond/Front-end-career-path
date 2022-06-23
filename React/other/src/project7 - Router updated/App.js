import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <nav>
        <h1>Welcome</h1>
        <Link to='/home'>Home</Link> | {""}
        <Link to='/profile'>Profile</Link> | {""}
        <Link to='/contact'>Contact</Link>
      </nav>
      <Outlet />
    </div>
  )
}
