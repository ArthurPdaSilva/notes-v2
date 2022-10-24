import styled, { css } from 'styled-components';

export const ContainerPattern = css`
  background-color: var(--corContainers-titulos);
  border-radius: var(--arredondaMentoElementos);
  padding: var(--espacamentoElementos);
`;

export const FlexCenterElement = css`
  display: flex;
  align-items: center;
`;

export const FlexMenu = css`
  ${FlexCenterElement}
  justify-content: space-between;
`;

export const FlexCentralize = css`
  ${FlexCenterElement}
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  ${FlexCentralize}
  width: 100%;
  height: 100%;
`;

export const ButtonAdd = styled.button`
  color: var(--corContainers-titulos);
  border-radius: var(--arredondaMentoElementos);
  font-weight: bold;
  font-size: 1.2rem;
`;
