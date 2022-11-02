import React from 'react';
import { ModalBackground, ModalContainer, InputContainer } from './modalStyles';
import { ButtonAdd, ListPattern, TitleContainer } from '../../patternStyles';
import { FiPlus, FiX } from 'react-icons/fi';

type ModalProtocol = {
  title?: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ title, setModal }: ModalProtocol) {
  return (
    <ModalBackground>
      <ModalContainer>
        <TitleContainer>
          <h1>
            {!title ? (
              <input type="text" placeholder="Digita o Nome da Lista" />
            ) : (
              title
            )}
          </h1>
          <FiX size={22} color="gray" onClick={() => setModal(false)} />
        </TitleContainer>

        <InputContainer>
          <input type="text" placeholder="Adicionar item" />
          <FiPlus size={36} color="green" />
        </InputContainer>
        <ListPattern>
          <li>
            <span>Item</span>
            <FiX size={22} color="red" />
          </li>
          <li>
            <span>Item</span>
            <FiX size={22} color="red" />
          </li>
        </ListPattern>
        <ButtonAdd>Concluído</ButtonAdd>
      </ModalContainer>
    </ModalBackground>
  );
}
