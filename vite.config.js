import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { esbuildConfig, vitePWAConfig } from "./vitePluginConfig.js";

export default defineConfig({
  esbuild: esbuildConfig,
  plugins: [ViteMinifyPlugin({}), , VitePWA({ ...vitePWAConfig })],
});
