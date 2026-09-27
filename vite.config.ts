import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
    base: '/dynamic-cube',
    resolve: {
      alias: {
        '#': path.resolve(import.meta.dirname, './src'),
      },
    },
    server: {
      host: 'localhost',
      port: 60000,
    }
})