import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

declare const __dirname: string;

// https://vitejs.dev/config/
/// <reference types="vite-plugin-svgr/client" />
export default defineConfig({
   plugins: [
      react(),
      svgr({ svgrOptions: { icon: true }, include: "**/*.svg?react" }),
   ],
   build: {
      commonjsOptions: {
         include: ["tailwind-config.cjs", "node_modules/**"],
      },
   },
   optimizeDeps: {
      include: ["tailwind-config"],
   },
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "./src"),
         "tailwind-config": path.resolve(__dirname, "./tailwind.config.cjs"),
      },
   },
});
