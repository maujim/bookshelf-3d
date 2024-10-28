// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve('./src');

export default defineConfig({
  root,
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        orbit: resolve(root, 'orbit/index.html'),
      },
    },
  },
})
