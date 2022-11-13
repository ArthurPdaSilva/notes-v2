import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import TodoProvider from './contexts/todos';
import GlobalStyles from './global';
import Routes from './pages/routes';

export default function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Routes />
        </BrowserRouter>
      </TodoProvider>
    </AuthProvider>
  );
}
