import styled from 'styled-components';
import { ContainerPattern, FlexCentralize } from '../../patternStyles';

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
  ${FlexCentralize}

  input {
    border-bottom: 1px solid gray;
  }
`;

export const InputContainer = styled.div``;

export const ListContainer = styled.ul`
  width: 100%;
`;
