import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import TodoType from '../@types/TodoType';

export default async function (): Promise<TodoType[]> {
  const data = await getDocs(
    query(collection(db, 'todos'), orderBy('created', 'asc')),
  )
    .then((snapshot) => {
      const list: TodoType[] = [];
      snapshot.forEach((doc) => {
        list.push({
          idUser: doc.data().idUser,
          idTodo: doc.data().idTodo,
          name: doc.data().name,
          message: doc.data().message,
          created: doc.data().created,
        });
      });
      return list;
    })
    .catch((e) => {
      throw new Error(e);
    });
  return data;
}
