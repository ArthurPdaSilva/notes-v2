import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../global';
import { ErrorContainer } from './errorStyles';

export default function Error() {
  return (
    <Container>
      <ErrorContainer>
        <h1>[404]</h1>
        <p>
          Desculpa, mas essa página não foi encontrada. Podendo está em
          manutenção ou não exister.
        </p>
        <Link to="/">Voltar a página inicial</Link>
      </ErrorContainer>
    </Container>
  );
}
