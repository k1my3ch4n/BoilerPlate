import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/util.scss";`,
      },
    },
  },
  resolve: {
    alias: [{ find: '@images', replacement: path.resolve(__dirname, 'src/assets/images') }],
  },
  assetsInclude: ['**/*.md'],
});
