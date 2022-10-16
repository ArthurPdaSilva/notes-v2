import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from './formStyles';
import { Container } from '../../patternStyles';

type FormProtocol = {
  title: string;
  type: string;
};

export default function Forms({ title, type }: FormProtocol) {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <FormContainer onSubmit={(e) => handleSubmit(e)}>
        <h1>{title}</h1>
        {type === 'register' && <input type="text" placeholder="Usuário" />}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">
          {type === 'register' ? 'Cadastrar' : 'Entrar'}
        </button>
        {type === 'register' ? (
          <Link to="/login">Já tem uma conta?</Link>
        ) : (
          <Link to="/signup">Não tem uma conta?</Link>
        )}
      </FormContainer>
    </Container>
  );
}
