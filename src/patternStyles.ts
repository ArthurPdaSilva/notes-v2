import styled, { css } from 'styled-components';

type FlexElement = {
  isAllElement?: boolean;
  errorElement?: boolean;
  btnElement?: boolean;
};

export const ContainerPattern = css`
  background-color: var(--corContainers-titulos);
  border-radius: var(--arredondaMentoElementos);
  padding: var(--espacamentoElementos);
`;

export const FlexPattern = css<FlexElement>`
  display: flex;
  align-items: ${(props) => !props.isAllElement && 'center'};
  justify-content: ${(props) =>
    !props.isAllElement && (props.btnElement ? 'flex-end' : 'center')};
  flex-direction: ${(props) =>
    (props.isAllElement || props.errorElement) && 'column'};
`;

export const Container = styled.div`
  ${FlexPattern}
  width: 100%;
  height: 100%;
`;

export const ButtonAdd = styled.button`
  color: var(--corContainers-titulos);
  border-radius: var(--arredondaMentoElementos);
  font-weight: bold;
  font-size: 1.2rem;
`;
