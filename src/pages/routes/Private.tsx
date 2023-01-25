import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import useAuthContext from '../../hooks/useAuth';
import { Container } from '../../patternStyles';

// // Route Validation
export default function Private({ children }: { children: JSX.Element }) {
  const appContext = useAuthContext();
  if (appContext?.signed) {
    return (
      <Container>
        <Header />
        {children}
      </Container>
    );
  } else return <Navigate to="/login" />;
}
