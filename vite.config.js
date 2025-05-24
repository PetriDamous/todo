import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { vitePWAConfig } from "./vitePluginConfig.js";

export default defineConfig({
  esbuild: {
    drop: ["console", "debugger"],
  },
  plugins: [VitePWA({ ...vitePWAConfig })],
});
