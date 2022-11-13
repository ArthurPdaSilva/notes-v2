import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { ButtonAdd, ListPattern, TitleContainer } from '../../patternStyles';
import Modal from '../Modal';
import { TodoContainer } from './todoStyles';

export default function Todo() {
  const [modal, setModal] = useState(false);

  return (
    <TodoContainer>
      <TitleContainer>
        <h3>Nome da lista</h3>
        <FiX size={22} color="gray" />
      </TitleContainer>
      <ListPattern>
        <li>
          <span>Item</span>
          <FiX size={22} color="red" />
        </li>
        <li>
          <span>Item</span>
          <FiX size={22} color="red" />
        </li>
        <li>
          <span>Item</span>
          <FiX size={22} color="red" />
        </li>
        <li>
          <span>Item</span>
          <FiX size={22} color="red" />
        </li>
        <li>
          <span>Item</span>
          <FiX size={22} color="red" />
        </li>
        <li>
          <span>Item</span>
          <FiX size={22} color="red" />
        </li>
      </ListPattern>
      <ButtonAdd onClick={() => setModal(!modal)}>Adicionar Mais</ButtonAdd>
      {modal && <Modal title="Lista" setModal={setModal} />}
    </TodoContainer>
  );
}
