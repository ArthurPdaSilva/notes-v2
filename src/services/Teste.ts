import UserType from '../types/UserType';

export default async function () {
  return JSON.parse(localStorage.getItem('user') as string) as UserType;
}
