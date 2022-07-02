import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { terser } from "rollup-plugin-terser";

const name = require("./package.json").main.replace(/\.js$/, "");
const isDev = process.env.NODE_ENV === "development";

const bundle = (config) => ({
  ...config,
  input: "src/index.ts",
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [
      esbuild(),
      terser({
        ecma: 2020,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          drop_console: !isDev,
          drop_debugger: !isDev,
        },
        output: { quote_style: 1 },
      }),
    ],
    output: [
      {
        file: `${name}.js`,
        format: "cjs",
        sourcemap: !isDev ? "inline" : false,
      },
      {
        file: `${name}.mjs`,
        format: "es",
        sourcemap: isDev ? "inline" : false,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: "es",
    },
  }),
];
