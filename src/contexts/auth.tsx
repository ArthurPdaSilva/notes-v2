import React, { createContext, useState, useCallback, useEffect } from 'react';
import UserType from '../types/UserType';
import Login from '../services/Login';
import Register from '../services/Register';
import Logout from '../services/Logout';
import { toast } from 'react-toastify';

interface AppContextInterface {
  signed: boolean;
  user: UserType | null;
  saveChangeUser: (newUser: UserType) => void;
  logout: () => void;
  signUp: ({ name, email, password }: UserType) => void;
  signIn: ({ email, password }: UserType) => void;
}

export const AuthContext = createContext<AppContextInterface | null>(null);

export default function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const isUser = localStorage.getItem('user');
    if (isUser) setUser(JSON.parse(isUser));
  }, [setUser]);

  const signUp = useCallback(
    ({ name, email, password }: UserType) => {
      Register(email, password, name)
        .then((data) => {
          saveChangeUser(data as UserType);
          toast.success('Bem vindo a plataforma!');
        })
        .catch(() => {
          toast.error('Conta já criada!');
        });
    },
    [setUser],
  );

  const signIn = useCallback(({ email, password }: UserType) => {
    Login(email, password)
      .then((data) => {
        saveChangeUser(data as UserType);
        toast.success(`Bem vindo de volta, ${data?.name}!`);
      })
      .catch(() => {
        toast.error('Email ou senha inconrretos!');
      });
  }, []);

  function storageUser(user: UserType) {
    localStorage.setItem(
      'user',
      JSON.stringify({
        uid: user.uid,
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl,
      }),
    );
  }

  const saveChangeUser = useCallback(
    (newUser: UserType) => {
      setUser(newUser);
      storageUser(newUser);
    },
    [setUser],
  );

  const logout = useCallback(() => {
    Logout();
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Saindo da plataforma');
  }, [setUser]);

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, saveChangeUser, logout, signIn, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
