import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from './formStyles';
import { ButtonAdd, Container } from '../../patternStyles';

type FormProtocol = {
  title: string;
  type: string;
  btnText: string;
  linkText?: string;
};

export default function Forms({
  title,
  type,
  btnText,
  linkText,
}: FormProtocol) {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <FormContainer onSubmit={(e) => handleSubmit(e)}>
        <h1>{title}</h1>
        {type !== 'login' && <input type="text" placeholder="Usuário" />}
        <input type="email" placeholder="Email" disabled={type === 'profile'} />
        {type !== 'profile' && <input type="password" placeholder="Senha" />}
        <ButtonAdd type="submit">{btnText}</ButtonAdd>
        {type !== 'profile' && (
          <Link to={type === 'login' ? '/signup' : '/login'}>{linkText}</Link>
        )}
      </FormContainer>
    </Container>
  );
}
