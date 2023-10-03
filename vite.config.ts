import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { resolve } from 'path';
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [solid(), dts({
    insertTypesEntry: true,
  }),],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
      name: 'fractionJS',
    },
    copyPublicDir: false,
  },
})
