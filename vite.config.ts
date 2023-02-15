import { resolve } from 'path'
import { defineConfig, resolveBaseUrl } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  server: {
    port: 3300,
    strictPort: true
  },
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // TODO: make these dynamic
        projects_583_veracruz: resolve(__dirname, 'projects/583/veracruz/index.html')
      }
    }
  }
})
