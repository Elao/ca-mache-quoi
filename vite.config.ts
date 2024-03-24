import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@app': '/src',
      '@assets': '/assets',
      '@images': '/assets/images',
      '@scss': '/assets/styles',
    },
  },
  server: {
    host: '0.0.0.0',
    port: 63286,
    strictPort: true,
  },
})
