import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// React 18 ka naya root API use kar rahe hain
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Agar aapne PWA (Progressive Web App) features add karne hon 
// toh yahan service worker register kar sakte hain.