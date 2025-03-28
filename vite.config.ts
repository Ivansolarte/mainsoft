import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'global': 'window', // Esto ayuda a solucionar problemas con algunos módulos
  },
  optimizeDeps: {
    include: ['crypto-browserify'],
  },
});
