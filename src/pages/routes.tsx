import React from 'react';
import { Routes as ContainerRoutes, Route } from 'react-router-dom';

// Pages
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';
import Error from './Error';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Route Validation
function PrivateRoute({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default function Routes() {
  return (
    <ContainerRoutes>
      <Route
        index
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Error />} />
    </ContainerRoutes>
  );
}
