import tailwindcss from '@tailwindcss/vite';
import 'nuxt';

export default defineNuxtConfig({
	modules: ['reka-ui/nuxt', '@nuxtjs/color-mode', '@nuxt/icon', 'shadcn-nuxt', '@nuxt/eslint'],
	css: ['assets/css/main.css'],
	compatibilityDate: '2025-02-19',
	vite: { plugins: [tailwindcss()] }
});
