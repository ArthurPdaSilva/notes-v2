import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import TodoType from '../types/TodoType';

export default async function (): Promise<TodoType[]> {
  const data = await getDocs(collection(db, 'lists'))
    .then((snapshot) => {
      const lista: TodoType[] = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.data().idUser,
          name: doc.data().nameList,
          itens: doc.data().itens,
        });
      });

      return lista;
    })
    .catch((e) => {
      throw new Error(e);
    });
  return data;
}
