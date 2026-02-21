import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/aye-thiri-portfolio/',
  plugins: [
    react(),
  ],
  server: {
    port: 3000,
  }
})