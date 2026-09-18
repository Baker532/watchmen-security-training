import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Root base so assets load on Cloudflare Workers (*.workers.dev).
export default defineConfig({
  plugins: [react()],
  base: '/',
})
