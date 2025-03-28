import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfill';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Activamos polyfills para los módulos necesarios
      include: ['crypto', 'stream', 'path'], // Si necesitas otros polyfills también
    }),
  ],
});