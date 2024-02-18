// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://credotbackramees.onrender.com",
        secure: false,

      },
    },
    port: 3000,
  },
  plugins: [react()],
});