import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Profile from './pages/profile/Profile'

export default function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/profile'>Profile</Link>
      </nav>

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route exact path='/profile' element={<Profile />}></Route>
      </Routes>
    </div>
  )
}
