import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so the production build works on GitHub Pages
// (https://baker532.github.io/watchmen-security-training/), the gh-pages
// branch, and CDN previews. This is a hash-anchor SPA, so it does not need
// an absolute project path.
export default defineConfig({
  plugins: [react()],
  base: './',
})
