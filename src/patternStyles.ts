import styled, { css } from 'styled-components';

type FlexElement = { isAllElement?: boolean };

export const ContainerPattern = css`
  background-color: var(--corContainers-titulos);
  border-radius: var(--arredondaMentoElementos);
  padding: var(--espacamentoElementos);
`;

export const FlexPattern = css<FlexElement>`
  display: flex;
  align-items: ${(props) => !props.isAllElement && 'center'};
  justify-content: ${(props) => !props.isAllElement && 'center'};
  flex-direction: ${(props) => props.isAllElement && 'column'};
`;

export const Container = styled.div`
  ${FlexPattern}
  width: 100%;
  height: 100%;
`;
