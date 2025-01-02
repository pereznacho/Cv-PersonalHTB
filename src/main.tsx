import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import { LanguageProvider } from './context/LanguageContext'; // Importa el proveedor de contexto de idioma


// Obtiene el elemento raíz del DOM
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento raíz en el DOM');
}

// Crea el árbol de React
createRoot(rootElement).render(
  <StrictMode>
    {/* Proveedor global para el contexto de idioma */}
    <LanguageProvider>
      {/* Componente principal */}
      <App />
    </LanguageProvider>
  </StrictMode>
);