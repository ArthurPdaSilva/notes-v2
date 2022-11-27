import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import TodoType from '../types/TodoType';

export default async function (todo: TodoType) {
  await setDoc(doc(db, `lists/${todo.idTodo}`), {
    idUser: todo.idUser,
    idTodo: todo.idTodo,
    name: todo.name,
    message: todo.message,
  });
}
