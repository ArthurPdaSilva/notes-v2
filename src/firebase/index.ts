import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

initializeApp({
  apiKey: 'AIzaSyCUPfj2fYvgFpvPKETNcq_2-rXjlzCgvWg',
  authDomain: 'notes-project-45868.firebaseapp.com',
  projectId: 'notes-project-45868',
  storageBucket: 'notes-project-45868.appspot.com',
  messagingSenderId: '953800681922',
  appId: '1:953800681922:web:8b52205b8b20105d850e5b',
  measurementId: 'G-T9MBDQWJED',
});

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
