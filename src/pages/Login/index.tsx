import React from 'react';
import Forms from '../../components/Forms';

export default function Login() {
  return (
    <Forms
      type="login"
      title="Log in"
      btnText="Entrar"
      linkText="Você não tem uma conta?"
    />
  );
}
