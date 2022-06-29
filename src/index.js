import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './contexts/AuthContext';
import Favicon from 'react-favicon'
import FAVICON from "./assets/images/fav2.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <Favicon url={FAVICON} />
        <App />
    </AuthProvider>
  </React.StrictMode>
);


