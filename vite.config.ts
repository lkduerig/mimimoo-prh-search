import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  // root: resolve(__dirname, 'src'),
  build: { // TODO Is this needed?
    outDir: '../dist',
    // Control cache using development flag
    cache: process.env.NODE_ENV === 'development' ? false : true,
  },
  server: { // TODO Are these needed?
    port: 5173,
    strictPort: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "./src/scss/styles.scss";`
      }
    },
  },
})