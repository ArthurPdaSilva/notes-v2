import React, { createContext, useEffect, useState, useCallback } from 'react';
import { db, auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import UserType from '../types/UserType';

interface AppContextInterface {
  signed: boolean;
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
      async function requestData() {
        await createUserWithEmailAndPassword(auth, email, password).then(
          async (value) => {
            const uid = value.user.uid;
            await setDoc(doc(db, `users/${uid}`), {
              uid: uid,
              name,
              avatarUrl: null,
              email,
            })
              .then(() => {
                const data = {
                  uid: uid,
                  userPhoto: null,
                  name,
                  email,
                  password: '',
                };
                setUser(data);
                storageUser(data);
              })
              .catch((e) => console.log(e));
          },
        );
      }

      requestData();
    },
    [setUser],
  );

  const signIn = useCallback(
    ({ email, password }: UserType) => {
      async function requestData() {
        await signInWithEmailAndPassword(auth, email, password)
          .then(async (value) => {
            const uid = value.user.uid;
            const userProfile = await getDoc(doc(db, `users/${uid}`));

            const data = {
              uid: uid,
              name: userProfile.data()?.name || '',
              email: userProfile.data()?.email || '',
              avatarUrl: userProfile.data()?.avatarUrl || '',
              password: '',
            };

            setUser(data);
            storageUser(data);
          })
          .catch((e) => console.log(e));
      }

      requestData();
    },
    [setUser],
  );

  function storageUser(user: UserType) {
    localStorage.setItem(
      'user',
      JSON.stringify({
        name: user.name,
        email: user.email,
        userPhoto: user.userPhoto,
      }),
    );
  }

  const logout = useCallback(() => {
    async function logoutUser() {
      alert('Saindo da plataforma...');
      localStorage.removeItem('user');
      await signOut(auth);
      setUser(null);
    }

    logoutUser();
  }, [setUser]);

  return (
    <AuthContext.Provider value={{ signed: !!user, logout, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
