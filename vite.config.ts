import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Adicione esse alias para evitar que o Babel compile o FontAwesome
      '@fortawesome/fontawesome-svg-core/import.macro': '@fortawesome/fontawesome-svg-core'
    }
  },
})
