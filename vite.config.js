import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Porta que deseja usar
    host: '0.0.0.0', // Isso permite acesso de qualquer IP, incluindo localhost, dispositivos na mesma rede, etc.
    open: true, // Abre o navegador automaticamente ao iniciar o servidor
  },
});
