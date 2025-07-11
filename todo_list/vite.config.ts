import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevtools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
    plugins: [
      vue(),
      vueDevtools(),
      federation({
        name: 'todolist',
        filename: 'remoteEntry.js',
        exposes: {
          './store': './src/store.ts',
          './VanillaTodos': './src/components/VanillaTodos.js',
          './VanillaAdd': './src/components/VanillaAdd.js',
          './VanillaSearch': './src/components/VanillaSearch.js',
        },
        shared: ['vue'],
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server: {
      port: parseInt(env.VITE_PORT || '8080'),
      strictPort: true,
    },
    preview: {
      port: parseInt(env.VITE_PORT || '8080'),
      strictPort: true,
    },
    build: {
      target: 'esnext', // Enable top-level await support
    }
  }
})
