// svelte.config.js

import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),

    alias: {
      $components: 'src/lib/components',
      $effects: 'src/lib/components/effects',
      $layout: 'src/lib/components/layout',
      $ui: 'src/lib/components/ui',
      $home: 'src/lib/components/home',
      $utils: 'src/lib/utils',
      $stores: 'src/lib/stores',
      $styles: 'src/lib/styles'
    }
  }
};

export default config;