import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
  pages: 'docs',
  assets: 'docs',
  fallback: 'index.html', // ✅ لحل مشكلة 404 في GitHub Pages
  strict: false
}),

		paths: {
			base: process.env.NODE_ENV === 'production' ? '/Personal-Website' : ''
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
