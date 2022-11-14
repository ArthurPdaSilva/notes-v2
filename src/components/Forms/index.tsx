import React, { useCallback, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer } from './formStyles';
import { ButtonAdd, Container } from '../../patternStyles';
import UserType from '../../types/UserType';
import { AuthContext } from '../../contexts/auth';

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
  const [userForm, setUserForm] = useState<UserType>({
    name: '',
    email: '',
    password: '',
  });
  const appContext = useContext(AuthContext);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserForm({ ...userForm, [e.target.name]: e.target.value });
    },
    [userForm, setUserForm],
  );

  useEffect(() => {
    const myUser = localStorage.getItem('user')
      ? (JSON.parse(localStorage.getItem('user') as string) as UserType)
      : { name: '', email: '', password: '' };
    setUserForm(myUser);
  }, [setUserForm]);

  const submitType = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (type === 'profile') {
        console.log('Perfil');
      } else {
        if (type === 'login') {
          appContext?.signIn(userForm);
        } else appContext?.signUp(userForm);
      }
    },
    [userForm, setUserForm, appContext],
  );

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
            minLength={5}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          disabled={type === 'profile'}
          value={userForm.email}
          onChange={(e) => handleChange(e)}
          required
        />
        {type !== 'profile' && (
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={userForm.password}
            onChange={(e) => handleChange(e)}
            minLength={5}
            required
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
