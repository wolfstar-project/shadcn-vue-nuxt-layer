import tailwindcss from '@tailwindcss/vite';
import 'nuxt';

export default defineNuxtConfig({
	modules: ['reka-ui/nuxt', '@nuxtjs/color-mode', '@nuxt/icon', 'shadcn-nuxt', '@nuxt/eslint'],
	css: ['assets/css/main.css'],
	compatibilityDate: '2025-02-19',
	colorMode: {
		preference: 'system', // default theme
		dataValue: 'theme', // activate data-theme in <html> tag
		classSuffix: '',
		fallback: 'light'
	},
	shadcn: {
		prefix: 'U'
	},
	icon: {
		clientBundle: {
			scan: true
		},
		mode: 'svg',
		componentName: 'NuxtIcon'
	},
	vite: { plugins: [tailwindcss()] }
});
