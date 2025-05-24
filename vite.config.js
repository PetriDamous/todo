import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { vitePWAConfig } from "./vitePluginConfig.js";

console.log(vitePWAConfig);

export default defineConfig({
  esbuild: {
    drop: ["console", "debugger"],
  },
  plugins: [VitePWA({ ...vitePWAConfig })],
});
