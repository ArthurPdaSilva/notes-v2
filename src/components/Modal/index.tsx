import React, { useCallback, useContext, useState } from 'react';
import { ModalBackground, ModalContainer, InputContainer } from './modalStyles';
import { ButtonAdd, ListPattern, TitleContainer } from '../../patternStyles';
import { FiPlus, FiX } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import ItemType from '../../types/ItemType';
import AddTodo from '../../services/AddTodo';
import { TodoContext } from '../../contexts/todos';

type ModalProtocol = {
  title?: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ title, setModal }: ModalProtocol) {
  const [nameList, setNameList] = useState('');
  const [count, setCount] = useState(1);
  const [list, setList] = useState<ItemType[]>([]);
  const [item, setItem] = useState<ItemType>({
    id: 0,
    name: '',
  });

  const appContext = useContext(AuthContext);
  const todoContext = useContext(TodoContext);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setItem({ ...item, [e.target.name]: e.target.value });
    },
    [item, setItem],
  );

  const addItems = useCallback(() => {
    function add() {
      if (item.name.length === 0) {
        alert('Digite um nome para o item!');
        return;
      } else if (list.length === 6) {
        alert('Lista cheia');
        return;
      }

      const hasItem = list.find((name) => name === item);
      if (hasItem) alert('Item já se encontra na lista!');
      else {
        setCount(count + 1);
        setList((oldValue) => [...oldValue, item]);
      }

      setItem({
        id: count,
        name: '',
      });
    }

    add();
  }, [item, list, count, setCount, setItem, setList]);

  const handleDone = useCallback(() => {
    if (nameList === '') {
      alert('Coloque o nome da lista!');
      return;
    } else if (list.length === 0) {
      alert('Lista vazia, adicione um item!');
      return;
    }

    const newItem = {
      id: appContext?.user?.uid as string,
      name: nameList,
      itens: list,
    };

    AddTodo(newItem)
      .then(() => alert('Lista cadastrada com sucesso!'))
      .catch((e: any) => console.log(e));

    todoContext?.saveTodos([...todoContext.todos, newItem]);
    setModal(false);
  }, [list, nameList, setModal]);

  return (
    <ModalBackground>
      <ModalContainer>
        <div>
          <TitleContainer>
            <h1>
              {!title ? (
                <input
                  type="text"
                  placeholder="Digita o Nome da Lista"
                  value={nameList}
                  onChange={(e) => setNameList(e.target.value)}
                />
              ) : (
                title
              )}
            </h1>
            <FiX size={22} color="gray" onClick={() => setModal(false)} />
          </TitleContainer>

          <InputContainer>
            <input
              type="text"
              placeholder="Adicionar item"
              name="name"
              value={item.name}
              onChange={(e) => handleChange(e)}
            />
            <FiPlus size={37} color="green" onClick={addItems} />
          </InputContainer>
        </div>

        <ListPattern>
          {list.map((e) => (
            <li key={e.id}>
              <span>{e.name}</span>
              <FiX
                size={22}
                color="red"
                onClick={() => {
                  setList(list.filter((el) => el.id !== e.id));
                }}
              />
            </li>
          ))}
        </ListPattern>
        <ButtonAdd onClick={handleDone}>Concluído</ButtonAdd>
      </ModalContainer>
    </ModalBackground>
  );
}
