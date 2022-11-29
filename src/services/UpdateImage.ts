import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, StorageReference } from 'firebase/storage';
import { db } from '../firebase';

export default async function (
  id: string,
  storageRef: StorageReference,
): Promise<string | void> {
  return await getDownloadURL(storageRef).then(async (url) => {
    const urlFoto = url;
    return await updateDoc(doc(db, 'users', id), {
      avatarUrl: urlFoto,
    })
      .then(() => {
        return urlFoto;
      })
      .catch((e) => {
        throw new Error(e);
      });
  });
}
