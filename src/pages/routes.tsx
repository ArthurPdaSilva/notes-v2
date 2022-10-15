import React from 'react';
import { Routes as ContainerRoutes, Route } from 'react-router-dom';

// Pages
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';
import Error from './Error';

export default function Routes() {
  return (
    <ContainerRoutes>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Error />} />
    </ContainerRoutes>
  );
}
