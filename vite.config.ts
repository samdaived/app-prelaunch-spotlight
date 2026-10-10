import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVitePlugin } from "@tanstack/router-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react(), TanStackRouterVitePlugin()],
  server: {
    port: 3000,
  },
});
