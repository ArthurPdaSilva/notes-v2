import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuth';
import { Container } from '../../patternStyles';

export default function Public({ children }: { children: JSX.Element }) {
  const appContext = useAuthContext();
  if (!appContext?.signed) return <Container>{children}</Container>;
  return <Navigate to="/" />;
}
