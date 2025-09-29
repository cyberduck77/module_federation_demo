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
        name: 'joblist',
        filename: 'remoteEntry.js',
        exposes: {
          './Enrollments': './src/components/Enrollments.vue',
          './Search': './src/components/Search.vue',
          './VanillaEnrollments': './src/components/VanillaEnrollments.js',
          './VanillaSearch': './src/components/VanillaSearch.js',
          './store': './src/store.ts',
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
      modulePreload: false,
      target: 'esnext', // Enable top-level await support
      minify: false,
      cssCodeSplit: false
    }
  }
})
