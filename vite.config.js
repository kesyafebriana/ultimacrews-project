import { defineConfig } from "vite";
import { resolve } from 'path'
import react from "@vitejs/plugin-react";
import pluginRewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  base: '/',
  plugins: [react(),pluginRewriteAll()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      main: resolve(__dirname, 'index.html'),
      nested: resolve(__dirname, 'public/index.html'),
    }
  },
});
