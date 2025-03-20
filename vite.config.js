import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss(),],
  base: '/sbi-clone/',  // ✅ Match your repo name exactly
  build: {
    outDir: 'dist'       // ✅ Ensure correct build directory
  }
})
