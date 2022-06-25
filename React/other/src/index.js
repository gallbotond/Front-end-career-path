import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
// import { ThemeContextProvider } from './project3/themeContext';
import './styles/style2.css'

import Profile from './project7 - Router updated/routes/profile/Profile'
import Contact from './project7 - Router updated/routes/contact/Contact'
import Info from './project7 - Router updated/routes/profile/Info'
import Settings from './project7 - Router updated/routes/profile/Settings'
import Home from './project7 - Router updated/routes/Home'
// import Invoice from './project7 - Router updated/routes/contact/Invoice.jsx'
import Invoice from './project7 - Router updated/routes/invoices/invoice';
import Invoices from './project7 - Router updated/routes/invoices/invoices';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeContextProvider> */}
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='home' element={<Home />} />
          <Route path='profile' element={<Profile />}>
            <Route path='/profile/info' element={<Info />} />
            <Route path='/profile/settings' element={<Settings />} />
          </Route>
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          {/* <Route path='contact' element={<Contact />}>
            <Route path=":invoiceID" element={<Invoice />} />
          </Route> */}
        </Route>
        <Route path='*' element={<main><p>There's nothing here!</p></main>} />
      </Routes>
    </Router>
    {/* </ThemeContextProvider> */}
  </React.StrictMode>
);
