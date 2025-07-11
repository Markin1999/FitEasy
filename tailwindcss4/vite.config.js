import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: '127.0.0.1', // 👈 Forza l’uso di IPv4 anziché localhost
    port: 5173         // puoi cambiare porta se necessario
  }
});
