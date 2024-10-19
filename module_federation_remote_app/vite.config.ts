import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/
const pagesDir = path.resolve(__dirname, "src/pages");
const pages = fs
  .readdirSync(pagesDir)
  .reduce((acc: Record<string, string>, file) => {
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const componentPath = `pages/${name}`;
    if (name !== "index" && ext === ".tsx") {
      acc[`./${componentPath}`] = `./src/${componentPath}`;
    }

    return acc;
  }, {});

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "RemoteEntryReactMF",
      filename: "remoteEntryReactMF.js",
      exposes: {
        ...pages,
      },
      shared: ["react"],
    }),
  ],
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    target: "esnext",
  },
});
