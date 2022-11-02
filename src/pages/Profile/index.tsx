import React, { useCallback } from 'react';
import Forms from '../../components/Forms';
import { ProfileContainer } from './profileStyles';

export default function Profile() {
  const handleProfile = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Conta editada com sucesso');
  }, []);
  return (
    <ProfileContainer>
      <Forms
        title="Meu Perfil"
        type="profile"
        btnText="Salvar"
        emailValue="teste@gmail.com"
        submitType={handleProfile}
      />
    </ProfileContainer>
  );
}
