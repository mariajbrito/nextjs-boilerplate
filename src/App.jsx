import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppShell from '@/AppShell';

// Ponto de entrada no browser. A arvore de paginas vive em AppShell para poder
// ser reaproveitada na pre-renderizacao, onde o router e outro.
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
