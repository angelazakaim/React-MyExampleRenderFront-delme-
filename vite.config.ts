import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react()],
  // 1. ADD THIS: This must match your GitHub repository name exactly
  base: '/React-MyExampleRenderFront-delme-f/',
  //,
  // server: {
  //   proxy: {
  //     // This matches any request starting with /api
  //     '/api': {
  //       // target: 'http://localhost:8080', // Replace with your Node server's port
  //       target: 'https://firstexamplerenderdeploy-delme.onrender.com',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
})