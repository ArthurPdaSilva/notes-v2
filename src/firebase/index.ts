import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

initializeApp({
  apiKey: 'AIzaSyCgqqYzllxntLH2qbnbCHvR7i8q7lmS_7A',
  authDomain: 'notes-new-74927.firebaseapp.com',
  projectId: 'notes-new-74927',
  storageBucket: 'notes-new-74927.appspot.com',
  messagingSenderId: '513865237363',
  appId: '1:513865237363:web:b2569c4b09c3d8f2d97b06',
  measurementId: 'G-5F8FFR1632',
});

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
