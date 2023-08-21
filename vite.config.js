import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }) => ({
  base: command === 'build' ? '/etc.clientlibs/<project>/clientlibs/' : '/',
  publicDir: command === 'build' ? false : 'src/assets',

  build: {
    brotliSize: false,
    manifest: false,
    minify: mode === 'development' ? false : 'terser',
    outDir: 'dist',
    sourcemap: command === 'serve' ? 'inline' : false,

    rollupOptions: {
      output: {
        assetFileNames: 'clientlib-site/resources/[ext]/[name][extname]',
        chunkFileNames: 'clientlib-site/resources/chunks/[name].[hash].js',
        entryFileNames: 'clientlib-site/resources/js/[name].js',
      },
    },
  },

  plugins: [tsconfigPaths()],

  server: {
    origin: 'http://localhost:5173',
  },
}));