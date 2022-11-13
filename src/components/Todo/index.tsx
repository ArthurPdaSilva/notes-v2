import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { ButtonAdd, ListPattern, TitleContainer } from '../../patternStyles';
import TodoType from '../../types/TodoType';
import Modal from '../Modal';
import { TodoContainer } from './todoStyles';

export default function Todo({ name, itens }: TodoType) {
  const [modal, setModal] = useState(false);

  return (
    <TodoContainer>
      <TitleContainer>
        <h3>{name}</h3>
        <FiX size={22} color="gray" />
      </TitleContainer>
      <ListPattern>
        {itens.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <FiX size={22} color="red" />
          </li>
        ))}
      </ListPattern>
      <ButtonAdd onClick={() => setModal(!modal)}>Adicionar Mais</ButtonAdd>
      {modal && <Modal title="Lista" setModal={setModal} />}
    </TodoContainer>
  );
}
