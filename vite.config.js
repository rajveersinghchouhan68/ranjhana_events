import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repo = 'ranjhana_events';
const base = process.env.GITHUB_PAGES === 'true' ? `/${repo}/` : '/';

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: 'rewrite-css-asset-urls',
      transform(code, id) {
        if (id.endsWith('.css') && base !== '/') {
          return code.replace(/url\((['"]?)\/assets\//g, `url($1${base}assets/`);
        }
      },
    },
  ],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
