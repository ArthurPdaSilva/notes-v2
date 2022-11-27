import React from 'react';
import Messages from '../../components/Messages';
import SendMessages from '../../components/SendMessages';
import { Container } from '../../patternStyles';
import { MessagesContainer } from './communityStyles';

export default function Community() {
  return (
    <Container>
      <h1>Deixe mensagens no mural de usuários! 😁</h1>
      <MessagesContainer>
        <Messages />
        <SendMessages />
      </MessagesContainer>
    </Container>
  );
}
