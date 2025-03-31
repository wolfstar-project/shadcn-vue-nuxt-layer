import sapphirePrettierConfig from '@sapphire/prettier-config';

/** @type {import('prettier').Config} */
export default {
	...sapphirePrettierConfig,
	plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-css-order'],
	tailwindStylesheet: './app/assets/css/main.css',
	overrides: [
		...sapphirePrettierConfig.overrides,
		{
			files: ['README.md'],
			options: {
				tabWidth: 2,
				useTabs: false,
				printWidth: 80,
				proseWrap: 'always'
			}
		}
	]
};
