import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, StorageReference } from 'firebase/storage';
import { db } from '../firebase';
import UserType from '../types/UserType';

export default async function (
  user: UserType,
  storageRef: StorageReference,
  name: string,
): Promise<UserType | void> {
  return await getDownloadURL(storageRef).then(async (url) => {
    const urlFoto = url;
    return await updateDoc(doc(db, 'users', user.uid as string), {
      avatarUrl: urlFoto,
      name: name,
    })
      .then(() => {
        user.name = name;
        user.avatarUrl = urlFoto;
        return user;
      })
      .catch((e) => {
        throw new Error(e);
      });
  });
}
