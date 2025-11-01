import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: 'index.html', // مهم لحل 404
      strict: false
    }),
    paths: {
      base: '/Personal-Website'
    },
    prerender: {
      handleHttpError: 'warn'
    }
  }
};

export default config;
