import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import TodoType from '../types/TodoType';

export default async function (todo: TodoType) {
  return await updateDoc(doc(db, 'todos', todo.idTodo), {
    name: todo.name,
    message: todo.message,
  });
}
