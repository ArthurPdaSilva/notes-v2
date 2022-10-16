import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--corHeader-Footer-links-borders);
  color: var(--corContainers-titulos);
  min-height: 15vh;
`;

export const MenuContainer = styled.ul`
  width: 20%;

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
    color: gray;
    text-decoration: underline;
    transform: scale(1.1);
  }
`;
