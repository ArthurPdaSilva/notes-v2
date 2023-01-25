import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import MessageType from '../@types/MessageType';

export default async function (): Promise<MessageType[]> {
  const data = await getDocs(
    query(collection(db, 'messages'), orderBy('created', 'asc'), limit(500)),
  )
    .then((snapshot) => {
      const list: MessageType[] = [];
      snapshot.forEach((doc) => {
        list.push({
          idUser: doc.data().idUser,
          idMessage: doc.data().idMessage,
          name: doc.data().name,
          message: doc.data().message,
          imgUser: doc.data().imgUser || '',
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
