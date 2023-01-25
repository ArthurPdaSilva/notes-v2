import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

export default function useAuthContext() {
  return useContext(AuthContext);
}
