import styled from 'styled-components';
import { FlexPattern } from '../../patternStyles';

export const MainContainer = styled.main`
  justify-content: space-around;
  min-height: 50vh;
  flex: 1;
  padding: var(--espacamentoElementos);

  & > h1,
  & > h2 {
    color: var(--corContainers-titulos);
  }
`;

export const ButtonContainer = styled.div`
  ${FlexPattern}

  & > button {
    background-color: var(--corBotaoAdd);
    padding: var(--espacamentoElementos);
    transition: all ease-in-out 0.3s;
  }

  & > button:hover {
    background-color: var(--corBotaoAddHover);
  }
`;
