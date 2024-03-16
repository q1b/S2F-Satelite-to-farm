import { markdoc } from 'svelte-markdoc-preprocess';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from '@sveltejs/adapter-auto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({}), markdoc({
		layouts: {
			default: join(
				dirname(fileURLToPath(import.meta.url)),
				'./src/lib/components/Layout.svelte'
			),
		}
	})],
	
    extensions: ['.markdoc', '.svelte'],
	
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			"@/*": "./src/lib/*",
		},
	}
};

export default config;
