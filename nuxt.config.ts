import tailwindcss from '@tailwindcss/vite';
import 'nuxt';

export default defineNuxtConfig({
	modules: ['reka-ui', '@nuxtjs/color-mode', '@nuxt/icon', 'shadcn-nuxt', '@nuxt/eslint'],
	shadcn: {
		prefix: 'U',
		componentDir: './components/ui'
	},
	css: ['assets/css/main.css'],
	compatibilityDate: '2025-02-19',
	vite: { plugins: [tailwindcss()] }
});
