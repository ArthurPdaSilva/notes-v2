import styled from 'styled-components';
import {
  ContainerColumn,
  ContainerPattern,
  FlexCenterElement,
} from '../../patternStyles';

export const ReceiveMessages = styled.div`
  ${ContainerColumn}
  gap: var(--espacamentoElementos);
  overflow-y: auto;

  flex: 1;
  width: 100%;
`;

type Props = { isUser?: boolean };

export const PerfilUser = styled.div<Props>`
  ${ContainerColumn}
  ${ContainerPattern}
  background: ${(props) =>
    props.isUser ? 'var(--corMensagens)' : 'transparent'};
  color: ${(props) => (props.isUser ? 'white' : 'black')};
`;

export const Receiving = styled.div<Props>`
  ${FlexCenterElement}
  gap: var(--espacamentoElementos);
  padding: var(--espacamentoElementos);
  flex-direction: ${(props) => (props.isUser ? 'row-reverse' : 'row')};
  animation: pop 0.25s ease;

  @keyframes pop {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }
`;
