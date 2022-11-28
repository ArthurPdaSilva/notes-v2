import styled from 'styled-components';
import { FlexMenu } from '../../patternStyles';

export const HeaderContainer = styled.header`
  ${FlexMenu}
  background-color: var(--corHeader-Footer-links-borders);
  color: var(--corContainers-titulos);
  padding: var(--espacamentoElementos);
  margin-bottom: 20px;

  & > svg {
    display: none;
  }

  @media (max-width: 600px) {
    & > svg {
      display: block;
    }
  }
`;

type Props = {
  isVisible: boolean;
};

export const MenuContainer = styled.ul<Props>`
  ${FlexMenu}
  transition: all ease-in-out 0.5s;
  gap: 10px;

  & > li a,
  & > li button {
    display: block;
    padding: var(--espacamentoElementos);
    text-decoration: none;
    font-size: 1.4rem;
    color: var(--corContainers-titulos);
    background-color: transparent;
    transition: all ease-in-out 0.5s;
  }

  & > li a:hover,
  & > li button:hover {
    transform: scale(1.1);
    border-radius: var(--arredondaMentoElementos);
  }

  @media (max-width: 600px) {
    position: fixed;
    background-color: var(--corHeader-Footer-links-borders);
    top: 57px;
    right: ${(props) => (props.isVisible ? '0' : '-100%')};
    width: 100%;
    flex-direction: column;
  }
`;
