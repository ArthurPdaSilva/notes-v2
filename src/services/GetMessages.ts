import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import MessageType from '../types/MessageType';

export default async function (): Promise<MessageType[]> {
  const data = await getDocs(collection(db, 'messages'))
    .then((snapshot) => {
      const list: MessageType[] = [];
      let count = 0;
      snapshot.forEach((doc) => {
        if (count !== 500) {
          list.push({
            idUser: doc.data().idUser,
            idMessage: doc.data().idMessage,
            name: doc.data().name,
            message: doc.data().message,
            imgUser: doc.data().imgUser || '',
          });
        }
        count++;
      });
      return list;
    })
    .catch((e) => {
      throw new Error(e);
    });
  return data;
}
