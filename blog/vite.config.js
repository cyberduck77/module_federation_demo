import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), 'VITE_');
    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.js'],
                refresh: true,
            }),
            tailwindcss(),
            federation({
                name: 'blog',
                remotes: {
                    joblist: 'http://localhost:8080/assets/remoteEntry.js',
                },
            }),
        ],
        server: {
            port: parseInt(env.VITE_PORT || '3000'),
        },
        build: {
            target: 'esnext' // Enable top-level await support
        }
    };
});
