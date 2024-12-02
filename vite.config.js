import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Esta es la carpeta donde Vite coloca los archivos de producción
    sourcemap: true, // Opcional: generar un archivo de mapa fuente, útil para depuración
  }
});
