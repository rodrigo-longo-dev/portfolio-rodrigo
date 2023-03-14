import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Home from './Pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
