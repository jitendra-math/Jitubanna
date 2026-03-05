// vite.config.js

import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],

  server: {
    host: true,
    port: 5173
  },

  preview: {
    port: 4173
  },

  resolve: {
    alias: {
      $components: "/src/lib/components",
      $effects: "/src/lib/components/effects",
      $layout: "/src/lib/components/layout",
      $ui: "/src/lib/components/ui",
      $home: "/src/lib/components/home",
      $utils: "/src/lib/utils",
      $stores: "/src/lib/stores",
      $styles: "/src/lib/styles"
    }
  },

  css: {
    devSourcemap: true
  }
});