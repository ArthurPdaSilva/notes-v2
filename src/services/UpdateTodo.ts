import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default async function (id: string, name: string, message: string) {
  return await updateDoc(doc(db, 'todos', id), {
    name,
    message,
  });
}
