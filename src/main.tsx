import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';

const root = document.getElementById('root');
if (root) { // Verifica se root é diferente de null
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Elemento 'root' não encontrado no HTML.");
  // Ou trate o erro de outra forma, como exibir uma mensagem para o usuário.
}