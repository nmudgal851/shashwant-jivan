// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    target: "es2015",  // down‑compile optional chaining etc.
    outDir: "dist"
  }
});
