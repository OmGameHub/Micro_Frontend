import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500,
  },
  preview: {
    port: 5500,
  },
  build: {
    lib: {
      entry: "./src/RandomNumberPage",
      name: "RandomNumberPage",
      fileName: (format) => `RandomNumberPage.${format}.js`,
    }
  },
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
});
