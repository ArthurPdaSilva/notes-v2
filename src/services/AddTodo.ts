import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import TodoType from '../types/TodoType';

export default async function (todo: TodoType) {
  await setDoc(doc(db, `lists/${todo.name}`), {
    idUser: todo.id,
    nameList: todo.name,
    itens: todo.itens,
  });
}
