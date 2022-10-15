import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './global';
import Routes from './pages/routes';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  );
}
