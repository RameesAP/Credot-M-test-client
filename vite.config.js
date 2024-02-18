import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://credotbackramees.onrender.com",
        secure: true, // Change to true if your server uses HTTPS
        changeOrigin: true, // Add this line for cross-origin requests
      },
    },
    port: 3000,
  },
  plugins: [react()],
});