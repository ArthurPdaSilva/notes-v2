import styled from 'styled-components';
import { ContainerColumn, FlexCenterElement } from '../../patternStyles';

export const MainContainer = styled.main`
  ${ContainerColumn}
  justify-content: space-around;
  flex: 1;
  padding: var(--espacamentoElementos);

  & > h1 {
    color: var(--corContainers-titulos);
  }
`;

export const SectionContainer = styled.section`
  ${FlexCenterElement}
  flex-wrap: wrap;
  gap: var(--espacamentoElementos);
  padding: var(--espacamentoElementos);
  height: 50vh;
  width: 100%;

  div,
  button {
    flex: none;
  }

  & > button {
    height: 45vh;
    width: 20vw;
    background: rgba(0, 0, 0, 0.1);
    border-radius: var(--arredondaMentoElementos);
    font-size: 120px;
    color: rgba(0, 0, 0, 0.5);
    transition: background 0.2s;

    @media (max-width: 600px) {
      width: 50vw;
    }
  }

  & > button:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    overflow-x: auto;
    flex-wrap: nowrap;
  }
`;
