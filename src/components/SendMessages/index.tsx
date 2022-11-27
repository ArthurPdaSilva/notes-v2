import React from 'react';
import { Send } from './sendStyles';

export default function SendMessages() {
  return (
    <Send>
      <input type="text" placeholder="Enviar mensagem" />
      <button type="submit">Enviar mensagem</button>
    </Send>
  );
}
