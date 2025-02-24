import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['lib/main.ts'],  // Entry file
  outDir: 'dist',           // Output directory
  format: ['cjs', 'esm'],   // Output formats (CommonJS and ESModule)
  target: 'esnext',         // Target environment
  clean: true,              // Clean the output directory before building
  dts: true,                // Generate TypeScript declaration files
  minify: true,             // Minify the output
  splitting: false,         // Disable code splitting
  bundle: true,             // Bundle dependencies
});
