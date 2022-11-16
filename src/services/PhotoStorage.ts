import { ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';

export default async function (id: string, imageAvatar: File) {
  const storageRef = ref(storage, `images/${id}/${imageAvatar.name}`);
  await uploadBytesResumable(storageRef, imageAvatar);
  return storageRef;
}
