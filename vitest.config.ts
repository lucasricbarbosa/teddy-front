import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.spec.tsx"],
    exclude: ["tests/**/*.e2e.spec.tsx", "**/node_modules/**"],
    globals: true,
    environment: "jsdom",
  },
});
