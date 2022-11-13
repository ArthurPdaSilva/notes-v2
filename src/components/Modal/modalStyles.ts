import styled from 'styled-components';
import {
  ContainerPattern,
  FlexCentralize,
  FlexCenterElement,
  FlexMenu,
} from '../../patternStyles';

export const ModalBackground = styled.div`
  ${FlexCentralize}
  background-color: rgba(0, 0, 0, 0.438);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
`;

export const ModalContainer = styled.div`
  ${ContainerPattern}
  ${FlexMenu}
  flex-direction: column;
  min-height: 50vh;
`;

export const InputContainer = styled.div`
  ${FlexCenterElement}

  & > input:focus,
  & > input:not(:placeholder-shown) {
    border: 1px solid var(--corBotaoAddHover);
  }

  & > input {
    border: 1px solid gray;
    padding: var(--espacamentoElementos);
  }
`;
