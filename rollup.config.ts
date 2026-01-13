import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import styles from "rollup-plugin-styles";

export default defineConfig({
  input: "./src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "m3terscan-components",
    sourcemap: true,
    plugins: [terser()],
  },

  external: [
    "react",
    "react-dom",
    "date-fns",
    "react-chartjs-2",
    "chart.js",
    "react/jsx-runtime",
    "react/jsx-dev-runtime",
  ],
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: "./tsconfig.json",
      noEmitOnError: true,
      declarationDir: "dist",
    }),
    styles(),
  ],
});
