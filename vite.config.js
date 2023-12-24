/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@styles": resolve(__dirname, "src/styles"),
      "@assets": resolve(__dirname, "src/assets"),
      "@pages": resolve(__dirname, "src/pages"),
      "@data": resolve(__dirname, "src/data"),
    },
  },
});
