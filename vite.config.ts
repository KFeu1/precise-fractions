import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { resolve } from 'path';
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    solid(),
    dts({
      insertTypesEntry: true,
    }),
    removeDocs(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'fractionJS',
    },
    copyPublicDir: false,
  },
})

function removeDocs() {
  return {
    name: 'remove-docs',

    transform(src, id) {
      if (/\.ts/.test(id)) {
        const rm = (js) => {
          const lines = js.split(/\r?\n/);

          let isDoc = false;
          const out = [];

          for (const line of lines) {
            // console.log(line);
            if (/^\s*\/\*\*/.test(line)) {
              isDoc = true;
            } else if (isDoc === true && /^\s*\*\//.test(line)) {
              isDoc = false;
              continue;
            }

            if (!isDoc) {
              out.push(line);
            }
          }

          const res = out.join("\n");
          console.log("res", res)
          return res;
        }


        return {
          code: rm(src),
          map: null, // provide source map if available
        }
      }
    },
  }
}