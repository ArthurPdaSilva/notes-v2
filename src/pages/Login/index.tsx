import React, { useCallback } from 'react';
import Forms from '../../components/Forms';

export default function Login() {
  const handleLogin = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Logado com sucesso');
  }, []);
  return (
    <Forms
      type="login"
      title="Log in"
      btnText="Entrar"
      submitType={handleLogin}
      linkText="Você não tem uma conta?"
    />
  );
}
