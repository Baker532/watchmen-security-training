import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project Pages URL: https://baker532.github.io/watchmen-security-training/
export default defineConfig({
  plugins: [react()],
  base: '/watchmen-security-training/',
})
