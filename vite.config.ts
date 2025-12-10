import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Use relative asset paths so the build works when hosted from a subpath (e.g. GitHub Pages)
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'docs', // Change the output directory to 'docs'
        emptyOutDir: true, // Optional: Clears the directory before each build (recommended)
        rollupOptions: {
          output: {
            entryFileNames: '[name]-[hash].js',
          }
        }
      },
    };
});
