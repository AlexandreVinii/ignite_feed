import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps
    cssCodeSplit: true, // Enable CSS code splitting
    minify: 'esbuild', // Use esbuild for minification
  },
})
