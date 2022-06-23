import React from 'react'
import {Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'

import Settings from './Settings'
import Info from './Info'

export default function Profile() {
  return (
    <div>
      <h1>Profile page</h1>
      <ul>
        <li><Link to='/profile/info'>Profile Info</Link></li>
        <li><Link to='/profile/settings'>Profile Settings</Link></li>
      </ul>

      <Routes>
        <Route path='/profile/info' element={<Info />}>Info</Route>
        <Route path='/profile/settings' element={<Settings />}>Settings</Route>
      </Routes>
    </div>
  )
}
