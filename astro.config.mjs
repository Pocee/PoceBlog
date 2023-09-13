import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pocee.github.io',
  base: '/PoceBlog',
  integrations: [tailwind()]
});