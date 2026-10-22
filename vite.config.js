import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static multi-page site: each page is a folder with its own index.html, so URLs stay clean (/doctoras/, /galeria/).
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        inicio: resolve(import.meta.dirname, 'index.html'),
        doctoras: resolve(import.meta.dirname, 'doctoras/index.html'),
        galeria: resolve(import.meta.dirname, 'galeria/index.html'),
      },
    },
  },
});
