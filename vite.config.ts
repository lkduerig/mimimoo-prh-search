import { defineConfig, Logger } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import sass from 'vite-plugin-sass'
// import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // root: resolve(__dirname, 'src'),  // Aligning the root configuration
  build: { // TODO Is this needed?
    outDir: '../dist',
    // Control cache using development flag
    cache: process.env.NODE_ENV === 'development' ? false : true,
  },
  server: {
    port: 5173, // TODO Is this needed?
    strictPort: true, // TODO Is this needed?
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "./src/scss/styles.scss";`
      }
    },
  },
  // logLevel: 'info',
  // customLogger: {
  //   info(msg: string) {
  //     if (
  //       msg.includes('Deprecation Warning [import]') &&
  //       msg.includes('node_modules/bootstrap')
  //     ) return
  //     console.info(msg)
  //   },
  //   warn(msg: string) {
  //     if (
  //       msg.includes('Deprecation Warning [import]') &&
  //       msg.includes('node_modules/bootstrap')
  //     ) return
  //     console.warn(msg)
  //   },
  //   error: console.error,
  //   debug: console.debug,
  // } as unknown as Logger,
})