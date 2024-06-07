import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import App from './App.js';
import { ThemeProvider } from '@mui/material';
import theme from './theme.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </ThemeProvider>
);


reportWebVitals();
