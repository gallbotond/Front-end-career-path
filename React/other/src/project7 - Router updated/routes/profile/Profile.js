import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function profile() {
  return (
    <div>
      <ul>
        <li><Link to='/profile/info'>Info</Link></li>
        <li><Link to='/profile/settings'>Settings</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}
