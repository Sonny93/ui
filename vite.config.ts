/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { dependencies, name } from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name,
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(dependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/styled': 'styled',
        },
      },
    },
    sourcemap: false,
    emptyOutDir: true,
  },
  plugins: [react(), dts({ rollupTypes: true }), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup_tests.ts',
  },
});
