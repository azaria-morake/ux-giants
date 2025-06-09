import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

{/*
// Local dev
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});

*/}


export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`
      }
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true
  }
})