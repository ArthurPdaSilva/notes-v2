import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import GlobalStyles from './global';
import Routes from './pages/routes';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}
