import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from '../package.json'

// https://vitejs.dev/config/
export default defineConfig({
  root: join(__dirname, '../src/renderer'),
  plugins: [vue()],
  base: './',
  build: {
    emptyOutDir: true,
    minify: false,
    outDir: '../../dist/renderer',
  },
  server: {
    host: pkg.env.HOST,
    port: pkg.env.PORT,
  },
})
