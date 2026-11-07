import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// The dashboard imports the app's real src/utils modules and reads README.md, index.html and
// src/App.jsx as text at build time, so every number on the page comes from the repo.
// It is published under the app at /NoPara/dashboard/.
export default defineConfig({
  base: '/NoPara/dashboard/',
  plugins: [react()],
  server: { fs: { allow: ['..'] } },
});
