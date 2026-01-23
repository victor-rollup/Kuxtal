import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: path.resolve(__dirname, 'src'),
      outDir: 'dist',
      rollupTypes: true,
      tsconfigPath: './tsconfig.lib.json',
      exclude: ['env.d.ts', 'vite.config.ts', '**/shims-vue.d.ts'],
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Kuxtal',
      fileName: (format) => `kuxtal.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
        },
      },
    },
  },
});
