import path from 'node:path';
import { rmSync } from 'node:fs';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron';
import svgr from 'vite-plugin-svgr';

rmSync(path.join(__dirname, 'dist-electron'), { recursive: true, force: true });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron({
      entry: 'electron/main.ts',
    }),
    svgr()
  ],
})
