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

export const TitleContainer = styled.div`
  ${FlexMenu}
  width: 100%;
  gap: var(--espacamentoElementos);

  & > h1 input:focus,
  & > h1 input:not(:placeholder-shown) {
    border-bottom: 1px solid var(--corBotaoAddHover);
  }

  & > h1 input {
    border-bottom: 1px solid gray;
    padding: var(--espacamentoElementos);
  }
`;

export const ButtonAdd = styled.button`
  color: var(--corContainers-titulos);
  border-radius: var(--arredondaMentoElementos);
  font-weight: bold;
  font-size: 1.2rem;
  background-color: var(--corBotaoAdd);
  padding: var(--espacamentoElementos);
  transition: all ease-in-out 0.3s;

  &:hover {
    background-color: var(--corBotaoAddHover);
  }
`;

export const ListPattern = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  ${FlexCentralize}
  gap: var(--espacamentoElementos);
  width: 100%;
  height: 70vh;

  li {
    ${FlexMenu}
    width: 100%;
  }

  span {
    display: block;
    word-break: break-all;
    width: 70%;
  }
`;
