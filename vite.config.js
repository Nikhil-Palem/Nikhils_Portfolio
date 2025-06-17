import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ No need to import tailwind here
export default defineConfig({
  plugins: [react()],
})
