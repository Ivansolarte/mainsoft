import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import NodePolyfillPlugin from 'vite-plugin-node-polyfill';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    NodePolyfillPlugin()  // Ahora usamos este plugin específico para Vite
  ],
  define: {
    'global': 'window', // Esto puede ayudar a resolver algunos problemas con la compatibilidad de módulos
  },
});