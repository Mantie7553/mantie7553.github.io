// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Exo 2',
      cssVariable: '--font-exo2',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          { src: ['./src/fonts/Exo2-Thin.ttf'], weight: 100, style: 'normal' },
          { src: ['./src/fonts/Exo2-ExtraLight.ttf'], weight: 200, style: 'normal' },
          { src: ['./src/fonts/Exo2-Light.ttf'], weight: 300, style: 'normal' },
          { src: ['./src/fonts/Exo2-Regular.ttf'], weight: 400, style: 'normal' },
          { src: ['./src/fonts/Exo2-Medium.ttf'], weight: 500, style: 'normal' },
          { src: ['./src/fonts/Exo2-SemiBold.ttf'], weight: 600, style: 'normal' },
          { src: ['./src/fonts/Exo2-Bold.ttf'], weight: 700, style: 'normal' },
          { src: ['./src/fonts/Exo2-ExtraBold.ttf'], weight: 800, style: 'normal' },
          { src: ['./src/fonts/Exo2-Black.ttf'], weight: 900, style: 'normal' },
        ],
      },
    },
  ],
});
