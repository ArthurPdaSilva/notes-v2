import React from 'react';
import { Routes as ContainerRoutes, Route } from 'react-router-dom';

// Pages
import Home from '../Home';
import Profile from '../Profile';
import Login from '../Login';
import SignUp from '../SignUp';
import Error from '../Error';
import Community from '../Community';
import Private from './Private';
import Public from './Public';

export default function Routes() {
  return (
    <ContainerRoutes>
      <Route
        index
        element={
          <Private>
            <Home />
          </Private>
        }
      />
      <Route
        path="/community"
        element={
          <Private>
            <Community />
          </Private>
        }
      />
      <Route
        path="/profile"
        element={
          <Private>
            <Profile />
          </Private>
        }
      />
      <Route
        path="/login"
        element={
          <Public>
            <Login />
          </Public>
        }
      />

      <Route
        path="/signup"
        element={
          <Public>
            <SignUp />
          </Public>
        }
      />

      <Route path="*" element={<Error />} />
    </ContainerRoutes>
  );
}
