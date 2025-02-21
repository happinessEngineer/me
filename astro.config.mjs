// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://happinessengineer.github.io',
  base: '/me',
  integrations: [
    react({
      include: ['**/react/*', '**/components/*'],
    }), 
    tailwind()
  ]
});
