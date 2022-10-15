import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../global';
import { ErrorContainer } from './errorStyles';

export default function Error() {
  return (
    <Container>
      <ErrorContainer>
        <h1>404</h1>
        <p>
          <span>Desculpa, mas essa página não existe : (</span>
          <Link to="/">Voltar a página inicial</Link>
        </p>
      </ErrorContainer>
    </Container>
  );
}
