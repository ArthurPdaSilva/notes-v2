import React from 'react';
import Messages from '../../components/Messages';
import SendMessages from '../../components/SendMessages';
import { Container } from '../../patternStyles';
import { MessagesContainer, Title } from './communityStyles';

export default function Community() {
  return (
    <Container>
      <Title>Deixe mensagens no mural de usuários! 😁</Title>
      <MessagesContainer>
        <Messages />
        <SendMessages />
      </MessagesContainer>
    </Container>
  );
}
