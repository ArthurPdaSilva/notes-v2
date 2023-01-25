import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import MessageType from '../@types/MessageType';

export default async function (message: MessageType) {
  return await updateDoc(doc(db, 'messages', message.idMessage), {
    name: message.name,
    imgUser: message.imgUser,
  });
}
