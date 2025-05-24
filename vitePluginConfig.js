import manifest from "./manifest.js";

console.log(manifest);

export const vitePWAConfig = {
  devOptions: {
    enabled: true,
  },
  includeAssets: ["images/*.svg", "images/*.png"],
  injectRegister: "auto",
  manifest: {
    name: "Todo",
    short_name: "TD",
    start_url: "/",
    icons: [
      {
        src: "/images/todo.svg",
        sizes: "any",
      },
    ],
    display: "minimal-ui",
    description: "Simple todo list app using vanilla web technologies.",
    background_color: "#434956",
    theme_color: "#a9afbc",
  },
};
