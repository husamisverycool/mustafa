import { defineConfig } from 'vite';

// Relative base so the build works from any host path (GitHub Pages, Netlify, a folder).
export default defineConfig({
  base: './',
  build: { chunkSizeWarningLimit: 900 },
});
