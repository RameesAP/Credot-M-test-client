// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    // proxy: {
    //   "/api": {
    //     // target: "https://credotbackramees.onrender.com",
    //     target: "http://localhost:5000",
    //     secure: true,
    //     changeOrigin: true,
    //     credentials: "include",
    //   },
    // },
    port: 3000,
  },
  plugins: [react()],
});