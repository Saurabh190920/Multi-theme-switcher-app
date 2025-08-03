import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Multi-theme-switcher-app/', // MUST match your repo name exactly
  plugins: [react()],
})
