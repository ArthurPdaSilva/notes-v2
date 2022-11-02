import React, { useCallback } from 'react';
import Forms from '../../co../../components/Forms';

export default function SignUp() {
  const handleRegister = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Cadastrado com sucesso');
  }, []);
  return (
    <Forms
      type="register"
      title="Criar conta"
      btnText="Cadastrar"
      submitType={handleRegister}
      linkText="Você já tem uma conta?"
    />
  );
}
