import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
    plugins: [
      vue(),
      vueDevTools(),
      federation({
        name: 'advertisement',
        remotes: {
          joblist: 'http://localhost:8080/assets/remoteEntry.js',
        },
        shared: ['vue'],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server: {
      port: parseInt(env.VITE_PORT || '8073'),
    },
    build: {
      modulePreload: false,
      target: 'esnext', // Enable top-level await support
      minify: false,
      cssCodeSplit: false
    }
  }
})
