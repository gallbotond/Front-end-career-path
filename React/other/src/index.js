import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
// import { ThemeContextProvider } from './project3/themeContext';
import './styles/style2.css'

import Profile from './project7 - Router updated/routes/profile'
import Contact from './project7 - Router updated/routes/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeContextProvider> */}
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
    {/* </ThemeContextProvider> */}
  </React.StrictMode>
);
