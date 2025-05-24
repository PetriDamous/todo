import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { esbuildConfig, vitePWAConfig } from "./vitePluginConfig.js";

export default defineConfig({
  esbuild: esbuildConfig,
  plugins: [VitePWA({ ...vitePWAConfig })],
});
