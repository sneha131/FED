import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './Views/HomePage'; 
import reportWebVitals from './reportWebVitals';
import { ReactComponent as YourSvg } from '../src/Assets/asset1.svg';
import MediaQuery from 'react-responsive';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode >
      <div className="font-Roboto homepage">
      <HomePage />
      </div>
  </React.StrictMode>
);

reportWebVitals();
