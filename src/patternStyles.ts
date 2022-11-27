import styled, { css } from 'styled-components';

export const ContainerPattern = css`
  background-color: var(--corContainers-titulos);
  border-radius: var(--arredondaMentoElementos);
  padding: var(--espacamentoElementos);
`;

export const ContainerColumn = css`
  display: flex;
  flex-direction: column;
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

  & > h1 {
    color: var(--corContainers-titulos);
    margin-bottom: var(--espacamentoElementos);
  }
`;
