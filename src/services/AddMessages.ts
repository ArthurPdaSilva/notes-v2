import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import MessageType from '../types/MessageType';

export default async function (message: MessageType) {
  await setDoc(doc(db, `messages/${message.idMessage}`), {
    idUser: message.idUser,
    idMessage: message.idMessage,
    imgUser: message.imgUser,
    name: message.name,
    message: message.message,
    created: message.created,
  });
}
