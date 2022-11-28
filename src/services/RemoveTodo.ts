import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

export default async function (idTodo: string) {
  await deleteDoc(doc(db, 'todos', idTodo));
}
