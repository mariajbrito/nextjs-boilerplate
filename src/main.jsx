import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from '@/App';
import '@/index.css';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const container = document.getElementById('root');
const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se a pagina vem pre-renderizada do build, o #root ja tem a marcacao e basta
// hidratar. No servidor de desenvolvimento o #root contem apenas o comentario
// <!--app-html-->, que conta como no filho mas nao e conteudo: por isso o teste
// e por firstElementChild e nao por hasChildNodes.
if (container.firstElementChild) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
