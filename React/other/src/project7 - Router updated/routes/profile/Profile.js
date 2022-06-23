import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function profile() {
  return (
    <div>
      <nav>
        <Link to='/profile/info'>Info</Link>
        <Link to='/profile/settings'>Settings</Link>
      </nav>
      <Outlet />
    </div>
  )
}
