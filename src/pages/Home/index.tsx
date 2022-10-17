import React from 'react';

export default function Home() {
  return (
    <main>
      <h1>Anotações</h1>
      <h2>Faça anotações de um jeito mais fácil : )</h2>
      <section>
        <div>
          <div>
            <h3>Nome da lista</h3>
            <button>X</button>
          </div>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
        <div>
          <div>
            <h3>Nome da lista</h3>
            <button>X</button>
          </div>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
      </section>
      <div>
        <button>Criar nova lista</button>
      </div>
    </main>
  );
}
