import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // chunkFileNames: 'assets/js/[name]-[hash].js', // no need since we don't have chunks
        entryFileNames: 'entry.js',
      },
    },
  },
});
