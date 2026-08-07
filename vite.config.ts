import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (see CNAME) is served from the site root, so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
