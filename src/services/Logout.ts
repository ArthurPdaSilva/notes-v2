import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default async function () {
  await signOut(auth);
}
