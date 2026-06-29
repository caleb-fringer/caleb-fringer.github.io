// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://caleb-fringer.github.io",

  server: {
      port: 3000,
  },

  integrations: [solidJs()],
});