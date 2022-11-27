import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './contexts/auth';
import TodoProvider from './contexts/todos';
import MessagesProvider from './contexts/message';
import GlobalStyles from './global';
import Routes from './pages/routes';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <MessagesProvider>
          <BrowserRouter>
            <ToastContainer
              theme="dark"
              autoClose={3000}
              position="top-center"
            />
            <GlobalStyles />
            <Routes />
          </BrowserRouter>
        </MessagesProvider>
      </TodoProvider>
    </AuthProvider>
  );
}
