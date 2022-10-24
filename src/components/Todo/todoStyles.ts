import styled from 'styled-components';
import {
  ContainerPattern,
  FlexMenu,
  FlexCentralize,
} from '../../patternStyles';

export const TodoContainer = styled.div`
  ${ContainerPattern}
  ${FlexCentralize}
  gap: var(--espacamentoElementos);
  height: 50vh;

  & > button {
    background-color: var(--corBotaoAdd);
    padding: var(--espacamentoElementos);
    transition: all ease-in-out 0.3s;
  }

  & > button:hover {
    background-color: var(--corBotaoAddHover);
  }
`;

export const TitleContainer = styled.div`
  ${FlexMenu}
  width: 100%;
  gap: var(--espacamentoElementos);
`;

export const TodoList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;

  li {
    ${FlexMenu}
    width: 20vw;
  }

  li > div {
    display: flex;
    gap: var(--espacamentoElementos);
  }

  span {
    display: block;
    word-break: break-all;
    width: 70%;
  }
`;
