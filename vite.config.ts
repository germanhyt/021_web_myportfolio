import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import type { InlineConfig } from "vitest";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";

interface VitestConfigExport extends UserConfig {
  test?: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
} as VitestConfigExport);
