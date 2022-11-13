import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import UserType from '../types/UserType';

export default async function (
  email: string,
  password: string,
  name: string,
): Promise<UserType | null> {
  const data = await createUserWithEmailAndPassword(auth, email, password)
    .then(async (value) => {
      const uid = value.user.uid;
      await setDoc(doc(db, `users/${uid}`), {
        uid: uid,
        name,
        avatarUrl: null,
        email,
      });
      return {
        uid: uid,
        userPhoto: null,
        name,
        email,
        password: '',
      };
    })
    .catch((e) => {
      throw new Error(e);
    });
  return data;
}
