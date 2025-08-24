import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        ref: true,
        svgoConfig: {
          plugins: [{ name: 'removeAttrs', params: { attrs: '(fill)' } }],
        },
      },
    }),
  ],
})
