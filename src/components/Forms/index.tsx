import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, ButtonAdd, FormContainer } from './formStyles';
import { Container } from '../../patternStyles';
import UserType from '../../@types/UserType';
import { FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';
import useAuthContext from '../../hooks/useAuth';
import useMessageContext from '../../hooks/useMessage';

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
  const appContext = useAuthContext();
  const messagesContext = useMessageContext();
  const [userForm, setUserForm] = useState<UserType>({
    name: '',
    email: '',
    password: '',
  });
  const [avatarUrl, setAvatarUrl] = useState(
    appContext?.user?.avatarUrl !== undefined
      ? (appContext?.user?.avatarUrl as string).length <= 1
        ? 'assets/user.png'
        : (appContext?.user?.avatarUrl as string)
      : ' ',
  );
  const [imageAvatar, setImageAvatar] = useState<File | null>(null);

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

  const handleFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value[0]) {
        if (!e.target.files) return;
        const image = e.target.files[0];
        if (image.type === 'image/jpeg' || image.type === 'image/png') {
          setImageAvatar(image);
          setAvatarUrl(URL.createObjectURL(image));
        } else {
          toast.error('Envie uma imagem válida!');
          return null;
        }
      }
    },
    [setImageAvatar, setAvatarUrl],
  );

  const submitType = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (type === 'profile') {
        const user = appContext?.user as UserType;
        appContext?.updateUser(imageAvatar, userForm.name).then(() => {
          toast.success('Alterações feitas com sucesso!');
          messagesContext?.updateMessages(
            user.uid as string,
            user.name,
            user.avatarUrl as string,
          );
        });
      } else {
        if (type === 'login') appContext?.signIn(userForm);
        else {
          const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
          if (regex.test(userForm.email)) appContext?.signUp(userForm);
          else toast.error('Email inválido!');
        }
      }
    },
    [userForm, setUserForm, appContext, imageAvatar],
  );

  return (
    <Container>
      <FormContainer onSubmit={(e) => submitType(e)}>
        <h1>{title}</h1>
        {type === 'profile' && (
          <Avatar>
            <span>
              <FiUpload color="#002642" size={25} />
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFile(e)}
            />
            <img src={avatarUrl} alt="Imagem do usuário" />
          </Avatar>
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
            minLength={8}
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
