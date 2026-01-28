import { defineConfig } from 'vite'

export default defineConfig({
    base: '/stellar-evolution-simulation/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    }
})
