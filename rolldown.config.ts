import { defineConfig } from "rolldown";
import { dts } from "rolldown-plugin-dts";

export default defineConfig({
  input: "./src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    file: "index",
    name: "m3terscan-components",
  },
  plugins: [dts()],
  external: ["react", "react-dom"],
});
