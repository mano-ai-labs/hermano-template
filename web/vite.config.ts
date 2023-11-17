import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/static/web/",
  build: {
    manifest: true,
    emptyOutDir: true,
    outDir: "../server/static/web",
    rollupOptions: {
      input: {
        entry: "./src/app.tsx",
      },
    },
  },
});
