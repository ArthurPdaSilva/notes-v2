import React, { useContext } from 'react';
import { Routes as ContainerRoutes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';
import Error from './Error';

// Components
import Header from '../components/Header';
import { Container } from '../patternStyles';
import { AuthContext } from '../contexts/auth';

// // Route Validation
function PrivateRoute({ children }: { children: JSX.Element }) {
  const appContext = useContext(AuthContext);
  if (appContext?.signed) {
    return (
      <Container>
        <Header />
        {children}
      </Container>
    );
  } else return <Navigate to="/login" />;
}

function PublicRoute({ children }: { children: JSX.Element }) {
  const appContext = useContext(AuthContext);
  if (!appContext?.signed) {
    return <Container>{children}</Container>;
  } else return <Navigate to="/" />;
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
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />

      <Route path="*" element={<Error />} />
    </ContainerRoutes>
  );
}
