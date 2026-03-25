import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/REPO_NAME/",  // TODO: Replace REPO_NAME with the name of your repository
  plugins: [react(), tailwindcss()],
});
