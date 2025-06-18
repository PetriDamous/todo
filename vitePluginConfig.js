const manifest = {
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
};

// Exports
export const esbuildConfig = {
  drop: ["console", "debugger"],
};

export const vitePWAConfig = {
  devOptions: {
    enabled: false,
  },
  includeAssets: ["images/*.svg", "images/*.png"],
  injectRegister: "auto",
  manifest,
};
