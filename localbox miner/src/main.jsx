import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProviderFunction } from './context/themecontext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProviderFunction>
    <App />
  </ThemeProviderFunction>
);
