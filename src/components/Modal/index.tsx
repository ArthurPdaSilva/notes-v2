import React from 'react';
import {
  ModalBackground,
  ModalContainer,
  InputContainer,
  ListContainer,
} from './modalStyles';
import { ButtonAdd, TitleContainer } from '../../patternStyles';

type ModalProtocol = {
  title?: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ title, setModal }: ModalProtocol) {
  return (
    <ModalBackground>
      <ModalContainer>
        <TitleContainer>
          <h1>{!title ? 'Nova lista' : title}</h1>
          <button onClick={() => setModal(false)}>X</button>
        </TitleContainer>

        {!title && <input type="text" placeholder="Qual o nome da lista?" />}
        <InputContainer>
          <input type="text" placeholder="Adicionar item" />
          <button>+</button>
        </InputContainer>
        <ListContainer>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ListContainer>
        <ButtonAdd>Concluído</ButtonAdd>
      </ModalContainer>
    </ModalBackground>
  );
}
