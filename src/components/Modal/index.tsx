import React from 'react';
import { ButtonAdd } from '../../patternStyles';

type ModalProtocol = {
  title?: string;
};

export default function Modal({ title }: ModalProtocol) {
  return (
    <div>
      <h1>{!title && 'Nova lista'}</h1>
      {!title && <input type="text" placeholder="Qual o nome da lista?" />}
      <div>
        <input type="text" placeholder="Adicionar item" />
        <button>X</button>
      </div>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
      <ButtonAdd>Concluído</ButtonAdd>
    </div>
  );
}
