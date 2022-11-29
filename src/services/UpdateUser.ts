import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default async function (
  id: string,
  name: string,
): Promise<string | void> {
  return await updateDoc(doc(db, 'users', id), {
    name: name,
  })
    .then(() => {
      return name;
    })
    .catch((e) => {
      throw new Error(e);
    });
}
