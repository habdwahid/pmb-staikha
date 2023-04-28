/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    laravel(['resources/js/app.jsx']),
    react(),
  ],
  server: {
    base: '/',
    host: true,
    https: true,
  },
});
