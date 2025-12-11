import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use environment variable for base path, default to '/' for Render
  // For GitHub Pages, set VITE_BASE_PATH='/Newscom/' in your build environment
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
