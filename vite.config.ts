import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.hackthebox.com', // Dominio de HackTheBox
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v4/profile/activity'), // Reescribir la ruta
        secure: true, // HackTheBox usa HTTPS, mantener true
      },
    },
  },
});