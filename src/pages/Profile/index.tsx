import React from 'react';
import Forms from '../../components/Forms';
import { ProfileContainer } from './profileStyles';

export default function Profile() {
  return (
    <ProfileContainer>
      <Forms title="Meu Perfil" type="profile" btnText="Salvar" />
    </ProfileContainer>
  );
}
