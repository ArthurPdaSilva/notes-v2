import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from './formStyles';
import { ButtonAdd, Container } from '../../patternStyles';
import UserType from '../../types/UserType';

type FormProtocol = {
  title: string;
  type: string;
  btnText: string;
  submitType: (e: React.FormEvent<HTMLFormElement>) => void;
  linkText?: string;
  emailValue?: string;
};

export default function Forms({
  title,
  type,
  btnText,
  emailValue,
  submitType,
  linkText,
}: FormProtocol) {
  const [userForm, setUserForm] = useState<UserType>({
    name: '',
    email: emailValue ?? '',
    password: '',
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserForm({ ...userForm, [e.target.name]: e.target.value });
    },
    [userForm, setUserForm],
  );

  // const handleSubmit = useCallback(
  //   (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     localStorage.setItem('userst', JSON.stringify(userForm));
  //     setUserForm({
  //       name: '',
  //       email: '',
  //       password: '',
  //     });
  //   },
  //   [userForm, setUserForm],
  // );

  return (
    <Container>
      <FormContainer onSubmit={(e) => submitType(e)}>
        <h1>{title}</h1>
        {type === 'profile' && (
          <img src="assets/user.png" alt="Imagem do usuário" />
        )}
        {type !== 'login' && (
          <input
            type="text"
            placeholder="Usuário"
            name="name"
            value={userForm.name}
            onChange={(e) => handleChange(e)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          disabled={type === 'profile'}
          value={userForm.email}
          onChange={(e) => handleChange(e)}
        />
        {type !== 'profile' && (
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={userForm.password}
            onChange={(e) => handleChange(e)}
          />
        )}
        <ButtonAdd type="submit">{btnText}</ButtonAdd>
        {type !== 'profile' && (
          <Link to={type === 'login' ? '/signup' : '/login'}>{linkText}</Link>
        )}
      </FormContainer>
    </Container>
  );
}
