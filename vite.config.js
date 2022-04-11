import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-app-template-ts/',
  build: {
    outDir: 'build',
  },
  plugins: [react(), tsConfigPaths()],
});
