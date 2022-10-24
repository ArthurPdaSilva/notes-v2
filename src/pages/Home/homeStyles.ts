import styled from 'styled-components';
import { FlexCenterElement } from '../../patternStyles';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  padding: var(--espacamentoElementos);

  & > h1 {
    color: var(--corContainers-titulos);
  }
`;

export const SectionContainer = styled.section`
  ${FlexCenterElement}
  gap: var(--espacamentoElementos);
  height: 50vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  & > button {
    background-color: var(--corBotaoAdd);
    padding: var(--espacamentoElementos);
    transition: all ease-in-out 0.3s;
  }

  & > button:hover {
    background-color: var(--corBotaoAddHover);
  }
`;
