import { sveltekit } from '@sveltejs/kit/vite';
// import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(),
// 		SvelteKitPWA(
// 			{
// 				pwaAssets: {
// 					config: true
// 				},
// 				manifest: {
// 					short_name: 'S2F App',
// 					name: 'Satellite Image Analytics for Crop Health Monitoring Web Application',
// 					description: `This web application leverages satellite imagery and advanced analytics to empower farmers with insights into crop health. Here's a breakdown of its potential functionalities:`,
// 					theme_color: '#ffffff',
// 					background_color: '#ffffff',
// 					display: 'standalone',
// 					lang: 'en',
// 					orientation: 'portrait',
// 					scope: '/',
// 				},
// 				// devOptions: {
// 				// 	enabled: false,
// 				// 	suppressWarnings: process.env.SUPPRESS_WARNING === 'true',
// 				// 	type: 'module',
// 				// 	navigateFallback: '/',
// 				// },
// 				// if you have shared info in svelte config file put in a separate module and use it also here
// 				kit: {
// 					includeVersionFile: true,
// 				},
// })
	]
});
