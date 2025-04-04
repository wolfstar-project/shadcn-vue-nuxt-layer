import tailwindcss from '@tailwindcss/vite';
import 'nuxt';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
	modules: ['reka-ui/nuxt', '@nuxtjs/color-mode', '@nuxt/icon', 'shadcn-nuxt', '@nuxt/eslint'],
	css: [join(currentDir, './assets/css/main.css')],
	compatibilityDate: '2025-02-19',
	colorMode: {
		preference: 'system', // default theme
		dataValue: 'theme', // activate data-theme in <html> tag
		classSuffix: '',
		fallback: 'light'
	},
	components: [
		{
			path: join(currentDir, './components/ui'),
			// this is required else Nuxt will autoImport `.ts` file
			extensions: ['.vue'],
			// prefix for your components, eg: UiButton
			prefix: 'U'
		}
	],

	icon: {
		clientBundle: {
			scan: true
		},
		mode: 'svg',
		componentName: 'NuxtIcon'
	},
	vite: { plugins: [tailwindcss()] }
});
