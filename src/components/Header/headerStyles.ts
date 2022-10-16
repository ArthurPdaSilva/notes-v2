import styled from 'styled-components';

export const HeaderContainer = styled.div`
  justify-content: space-between;
  color: var(--corContainers-titulos);
  min-height: 10vh;

  h1 {
    font-size: 3rem;
  }
`;

export const MenuContainer = styled.ul`
  gap: var(--espacamentoElementos);

  & > li {
    font-size: 1.4rem;
  }
`;
