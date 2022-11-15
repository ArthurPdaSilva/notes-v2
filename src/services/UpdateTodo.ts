import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import TodoType from '../types/TodoType';

export default async function (todo: TodoType): Promise<TodoType | void> {
  return await updateDoc(doc(db, 'lists', todo.idTodo), {
    name: todo.name,
    message: todo.message,
  })
    .then(() => {
      return todo;
    })
    .catch((e) => {
      throw new Error(e);
    });
}
