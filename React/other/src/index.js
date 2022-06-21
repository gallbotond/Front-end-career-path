import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ThemeContextProvider } from './project3/themeContext';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeContextProvider> */}
    <Router>
      <App />
    </Router>
    {/* </ThemeContextProvider> */}
  </React.StrictMode>
);
