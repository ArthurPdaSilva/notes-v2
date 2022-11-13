import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

initializeApp({
  apiKey: 'AIzaSyC1EoGfC_trzs2xcvjYWB534YkH-Lglmvo',
  authDomain: 'notes-72596.firebaseapp.com',
  projectId: 'notes-72596',
  storageBucket: 'notes-72596.appspot.com',
  messagingSenderId: '943447573679',
  appId: '1:943447573679:web:f225c242914277a6bc805a',
});

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
