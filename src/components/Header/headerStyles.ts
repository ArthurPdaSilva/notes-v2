import styled from 'styled-components';
import { FlexPattern } from '../../patternStyles';

export const HeaderContainer = styled.header`
  background-color: var(--corHeader-Footer-links-borders);
  color: var(--corContainers-titulos);
  padding: var(--espacamentoElementos);
`;

export const MenuContainer = styled.ul`
  ${FlexPattern}
  gap: calc(var(--espacamentoElementos) + 10px);
  width: 30%;

  & > li a,
  & > li button {
    display: block;
    padding: var(--espacamentoElementos);
    text-decoration: none;
    font-size: 1.4rem;
    color: var(--corContainers-titulos);
    background-color: transparent;
    transition: all ease-in-out 0.3s;
  }

  & > li a:hover,
  & > li button:hover {
    background-color: var(--corBackground);
    border-radius: var(--arredondaMentoElementos);
  }
`;
