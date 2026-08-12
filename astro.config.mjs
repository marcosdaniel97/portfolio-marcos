// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 600, 700],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Fira Code',
      cssVariable: '--font-fira-code',
      weights: [400, 500],
      subsets: ['latin'],
    },
  ],
});
