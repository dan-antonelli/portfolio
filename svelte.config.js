import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

const base = '/portfolio';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		},
		prerender: {
			pages: ['*', '/experience/*', '/projects/*', '/skills/*']
		},
		resolve: {
			alias: {
				$lib: './src/lib',
				'@data': './src/lib/data',
				'@components': './src/lib/components',
				'@md': './src/lib/md',
				'@stores': './src/lib/stores',
				'@utils': './src/lib/utils',
				'@images': './src/lib/assets/images'
			}
		}
	}
};

export default config;
