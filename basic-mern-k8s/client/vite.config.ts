import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,         // Listen on all network interfaces (0.0.0.0)
    port: 5173,         // The container-internal port Vite will run on
    strictPort: true,   // Fail if the port is already in use instead of auto-incrementing
    watch: {
      usePolling: true, // Required for Hot Module Replacement (HMR) to work reliably in Docker/WSL
    },
  },
})
