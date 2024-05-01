import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import { createRoot } from 'react-dom/client';
import Routes from './router/Routes.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes.element />
    </BrowserRouter>
  </React.StrictMode>
);
